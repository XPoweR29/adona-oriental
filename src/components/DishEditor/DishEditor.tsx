import { useState, useContext, useEffect } from "react";
import { EditorState } from "../../types/types";
import styles from "./Editor.module.scss";
import { AdminContext } from "../Context/AdminContext";
import { useMenuManager } from "../../hooks/useMenuManager";

export const DishEditor = () => {
	const { setDishEditor, dishEditorState, setDishEditorState, setIsEditing, isEditing } = useContext(AdminContext)!;
	const {createDish, editDish} = useMenuManager();
	const [errors, setErrors] = useState<{ [key in keyof EditorState]?: string }>(
		{}
	);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setDishEditorState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		setErrors((prev) => ({ ...prev, [e.target.name]: null }));
	};

	const handleSubmit = async(e: React.FormEvent) => {
		e.preventDefault();
		if(!isEditing) {
			await createDish(dishEditorState);
		} else {
			await editDish(dishEditorState);

		}
		setDishEditor(false);
	};

	useEffect(() => {
		return () => {
			setDishEditorState({id: "", name: "", engName: "", price: "", groupId: ""})
			setIsEditing(false);
		}
	},[]);

	return (
		<div className={styles.container}>
			<form className={styles.editor} onSubmit={handleSubmit}>
				<div className={styles.inputContainer}>
					<label htmlFor="name">Nazwa dania:</label>
					<input
						id="name"
						type="text"
						name="name"
						value={dishEditorState.name}
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
				<div className={styles.inputContainer}>
					<label htmlFor="engName">Nazwa angielska:</label>
					<input
						id="engName"
						type="text"
						name="engName"
						value={dishEditorState.engName}
						onChange={handleChange}
						required
					/>
					<p
						className={`${styles.error} ${
							errors.name && styles["error--active"]
						}`}>
						{errors.name}
					</p>
				</div>{" "}
				<div className={styles.inputContainer}>
					<label htmlFor="price">Cena (zł):</label>
					<input
						id="price"
						type="text"
						name="price"
						value={dishEditorState.price}
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
					<button type="reset" onClick={() => setDishEditor(false)}>
						Anuluj
					</button>
				</div>
			</form>
		</div>
	);
};
