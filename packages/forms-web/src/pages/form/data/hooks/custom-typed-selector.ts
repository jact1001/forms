import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../../store";
import { RootFormState } from "../state/reducers";
export const useCustomTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFormStore = <T>(selector: (state: RootFormState) => T) => {
    return useCustomTypedSelector(state => selector(state.form));
};
