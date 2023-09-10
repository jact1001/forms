import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../../store";
import { RootUserFormsState } from "../state/reducers";
export const useCustomTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useUserFormsStore = <T>(selector: (state: RootUserFormsState) => T) => {
    return useCustomTypedSelector(state => selector(state.userForms));
};
