import {
    INIT_GET_FILES,
    GET_FILES_SUCCESS,
    GET_FILES_FAIL,
    FileActionTypes,
    File
} from '../types/files'
  
interface FilesState {
    fetching: boolean,
    error: boolean,
    fileList: File[]
}

const initialState: FilesState = {
    fileList: [],
    fetching: true,
    error: false
}
  
export default function fileReducer(state = initialState, action: FileActionTypes): FilesState {
    
    switch (action.type) {
        case INIT_GET_FILES:
            return {
                ...state,
                fetching: true
            }
        case GET_FILES_FAIL:
            return {
                ...state,
                error: true,
                fetching: false
            }
        case GET_FILES_SUCCESS:
            return {
                ...state,
                fileList: action.payload,
                fetching: false,
                error: false
            }
      default:
        return state
    }
  }