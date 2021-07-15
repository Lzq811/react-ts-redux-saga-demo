
import { PlusAction, DplusAction } from "./action"

export const CounterDispatchToProps = (dispatch: any) => ({
  onPlus: (step: number) => dispatch(PlusAction(step)),
  onDplus: (step: number) => dispatch(DplusAction(step))
})