import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import styles from "./GroupHeading.module.scss";
import { AdminContext } from "../Context/AdminContext";
import { useMenuManager } from "../../hooks/useMenuManager";
import { AppContext } from "../Context/AppContext";

interface Props {
	name: string;
	id: string;
	dragHandleProps: any;
}

export const GroupHeading = ({ name, id, dragHandleProps }: Props) => {
	const { breakpoint } = useContext(AppContext)!;
	const {
		visibleGroup,
		setVisibleGroup,
		setGroupEditor,
		setGroupEditorState,
		setIsEditing,
	} = useContext(AdminContext)!;
	const { removeGroup } = useMenuManager();

	const handleClick = () => {
		if (visibleGroup && visibleGroup === id) {
			setVisibleGroup("");
		} else {
			setVisibleGroup(id);
		}
	};

	const handleEditClick = () => {
		setIsEditing(true);
		setGroupEditorState({ id, name });
		setGroupEditor(true);
	};

	return (
		<div className={styles.container} {...dragHandleProps}>
			<div
				className={`${styles.groupHeading} ${
					visibleGroup === id && styles["groupHeading--active"]
				}`}>
				<div className={styles.content} onClick={handleClick}>
					<p className={styles.name}>{name}</p>
					{breakpoint.sm && (
						<Icon
							icon={`raphael:${visibleGroup === id ? "arrowup" : "arrowdown"}`}
							className={styles.icon}
						/>
					)}
				</div>

				<div className={styles.tools}>
					<button className={styles.editBtn} onClick={handleEditClick}>
						<Icon icon="iconamoon:edit-fill" />
					</button>
					<button className={styles.removeBtn} onClick={() => removeGroup(id)}>
						<Icon icon="ic:baseline-delete" />
					</button>
				</div>
			</div>
		</div>
	);
};
