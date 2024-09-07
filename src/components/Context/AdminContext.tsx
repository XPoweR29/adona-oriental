import { ReactNode, createContext, useState } from "react";
import { AdminContextType } from "../../types/AdminContext.types";
import { AppContextProvider } from "./AppContext";
import { Dish, EditorState } from "../../types/types";

export const AdminContext = createContext<AdminContextType | null>(null);

export const AdminContextProvider = ({ children }: { children: ReactNode }) => {
	const [visibleGroup, setVisibleGroup] = useState<string>("");
	const [dishEditor, setDishEditor] = useState(false);
	const [groupEditor, setGroupEditor] = useState(false);
	const [groupEditorState, setGroupEditorState] = useState<Pick<EditorState, "name"|"id">>({name: "", id: ""});
	const [dishEditorState, setDishEditorState] = useState<Partial<Dish & {groupId: string}>>({id: "", name: "", engName: "", price: "", groupId: ""});
	const [isEditing, setIsEditing] = useState<boolean>(false);	


	// declare type for all these vars in AppContextType!
	const contextValues = {
		visibleGroup,
		setVisibleGroup,
		dishEditor, 
		setDishEditor,
		groupEditor,
		setGroupEditor,
		groupEditorState,
		setGroupEditorState,
		dishEditorState,
		setDishEditorState,
		isEditing,
		setIsEditing,

	};

	return (
		<AppContextProvider>
			<AdminContext.Provider value={contextValues}>
				{children}
			</AdminContext.Provider>
		</AppContextProvider>
	);
};
