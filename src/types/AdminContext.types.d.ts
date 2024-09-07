import { DishEditor } from "../components/DishEditor/DishEditor";
import { Dish, GroupEditor } from "./types";
export interface AdminContextType {
	visibleGroup: string;
	setVisibleGroup: React.Dispatch<React.SetStateAction<string>>;
	dishEditor: boolean;
	setDishEditor: React.Dispatch<React.SetStateAction<boolean>>;
	groupEditor: boolean;
	setGroupEditor: React.Dispatch<React.SetStateAction<boolean>>;
	groupEditorState: Pick<EditorState, "name"|"id">
	setGroupEditorState: React.Dispatch<React.SetStateAction<Pick<EditorState, "name"|"id">>>;
	dishEditorState: Partial<Dish & {groupId: string}>
	setDishEditorState: React.Dispatch<React.SetStateAction<Partial<Dish & {groupId: string}>>>;
	isEditing: boolean
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;

}
