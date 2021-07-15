
import { IState } from './types'

export const counterSatteToProps = (state: IState) => ({ counter: state.counter })