import {useContext} from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./DishList.module.scss";
import { Dish } from "../../types/types";
import { AdminContext } from "../Context/AdminContext";
import { useMenuManager } from "../../hooks/useMenuManager";

interface Props {
	dishes: Pick<Dish, "name" | "price" | "engName" | "id">[];
	groupId: string;
}

export const DishList = ({ dishes, groupId }: Props) => {
	const {setDishEditor, setDishEditorState, setIsEditing} = useContext(AdminContext)!;
	const {removeDish} = useMenuManager();

	const handleAddDish = () => {
		setDishEditorState((prev) => ({...prev, groupId}));
		setDishEditor(true);
		
	};

	const handleEditClick = (data: Partial<Dish>) => {
		setIsEditing(true);
		setDishEditorState(data);
		setDishEditor(true);
	};

	return (
		<ul className={styles.menuList}>
			<button className={styles.addItemBtn} onClick={handleAddDish}>
				<Icon icon="basil:add-solid" /> Dodaj pozycję
			</button>

			{dishes.map(({ name, engName, price, id }) => (
				<li className={styles.menuItem} key={id}>
					<MenuItem name={name} engName={engName} price={Number(price)} />

					<div className={styles.toolBtns}>
						<div className={styles.toolBtns}>
							<button className={styles.editBtn} onClick={()=>handleEditClick({id, name, engName, price})}>
								<Icon icon="iconamoon:edit-fill" />
							</button>
							<button className={styles.removeBtn} onClick={()=>removeDish(id, name)}>
								<Icon icon="ic:baseline-delete" />
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
