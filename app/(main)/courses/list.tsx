"use client"

import { toast } from "sonner"
import { courses, userProgress } from "@/db/schema"
import { Card } from "./card"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { upsertUserProgress } from "@/actions/user-progress"


type Props = {
  courses: typeof courses.$inferSelect[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const onClick = (id: number) => {
    if (pending) return   //如果等待直接终止

    if (id === activeCourseId) {  //如果用户点击了一个当前是活动课程的 ID的课程，不需要进行整个数据库的更新
      return router.push("/learn")  //中断函数，将用户重定向到learn
    }

    startTransition(() => {
      upsertUserProgress(id)
        .catch(() => toast.error("Something went wrong."))
    })
  }


  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          // 当 pending = true（有异步操作进行时），所有课程卡片会进入禁用状态：1.按钮变为不可点击（视觉上通常表现为置灰）2.屏蔽所有点击事件
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  )
}