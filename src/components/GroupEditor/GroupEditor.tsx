import { useState, useContext, useEffect } from "react";
import { EditorState } from "../../types/types";
import styles from "../../components/DishEditor/Editor.module.scss";
import { AdminContext } from "../Context/AdminContext";
import { useMenuManager } from "../../hooks/useMenuManager";

export const GroupEditor = () => {
	const { setGroupEditor, groupEditorState, setGroupEditorState, isEditing, setIsEditing} = useContext(AdminContext)!;
	const {createGroup, editGroup} = useMenuManager();
	const [errors, setErrors] = useState<{ [key in keyof Pick<EditorState, "name">]?: string }>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setGroupEditorState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		setErrors((prev) => ({ ...prev, [e.target.name]: null }));
	};

	const handleSubmit = async(e: React.FormEvent) => {
		e.preventDefault();
		if(!isEditing) {
			await createGroup(groupEditorState);
		} else {
			await editGroup(groupEditorState.name, groupEditorState.id);
		}
		setGroupEditor(false);
	}
	
	useEffect(() => {
		return () =>{
			setGroupEditorState({name: "", id: ""});
			setIsEditing(false);
		} 
	}, []);

	return (
		<div className={styles.container} onSubmit={handleSubmit}>
			<form className={styles.editor}>
				<div className={styles.inputContainer}>
					<label htmlFor="name">Nazwa grupy:</label>
					<input
						id="name"
						type="text"
						name="name"
						value={groupEditorState.name}
						onChange={handleChange}
						required
					/>
					<p
						className={`${styles.error} ${
							errors.name && styles["error--active"]
						}`}>
						{errors.name}
					</p>
				</div>

				<div className={styles.btnsContainer}>
					<button type="submit">Zapisz</button>
					<button type="reset" onClick={() => setGroupEditor(false)}>
						Anuluj
					</button>
				</div>
			</form>
		</div>
	);
};
