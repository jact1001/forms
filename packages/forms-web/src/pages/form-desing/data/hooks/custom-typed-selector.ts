import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../../store";
import { RootDesignFormState } from "../state/reducers";
export const useCustomTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDesignFormStore = <T>(selector: (state: RootDesignFormState) => T) => {
    return useCustomTypedSelector(state => selector(state.formDesing));
};
