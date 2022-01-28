import { Module, Mutation, VuexModule } from "vuex-module-decorators"
import { Todo as ITodo } from "~/types/todo"
import _ from "lodash"
import { v4 as uuid } from "uuid"

@Module({ name: "koinoSample/todo", stateFactory: true, namespaced: true })
export default class Todo extends VuexModule {
  data: ITodo[] = initialValue()

  @Mutation
  addTodo (todo: ITodo) {
    this.data = this.data.concat(todo)
  }

  @Mutation
  completed (id: string) {
    this.data = this.data.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: true,
        }
      } else {
        return todo
      }
    })
  }
}

function initialValue (): ITodo[] {
  return _.range(3).map((i) => {
    return {
      id: uuid(),
      title: `やること${i + 1}`,
      description: `やること${i + 1}の詳細`,
      completed: false,
    }
  })
}
