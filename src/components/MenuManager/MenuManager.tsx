import { useEffect, useContext } from "react";
import styles from "./MenuManager.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { GroupHeading } from "../GroupHeading/GroupHeading";
import { DishList } from "../DishList/DishList";
import { AdminContext } from "../Context/AdminContext";
import { useMenuManager } from "../../hooks/useMenuManager";
import { DishEditor } from "../DishEditor/DishEditor";
import { GroupEditor } from "../GroupEditor/GroupEditor";
import {
	DragDropContext,
	Draggable,
	DropResult,
	Droppable,
} from "react-beautiful-dnd";
import { AppContext } from "../Context/AppContext";
import { Loader } from "../Loader/Loader";

export const MenuManager = () => {
	const { menu, setMenu, loading } = useContext(AppContext)!;
	const { visibleGroup, dishEditor, groupEditor, setGroupEditor } =
		useContext(AdminContext)!;
	const { refreshMenuList, updateGroupOrder } = useMenuManager();

	useEffect(() => {
		(async () => {
			console.log("MenuManager załadowany!");
			await refreshMenuList();
		})();
	}, []);

	const handleDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return;

		const items = Array.from(menu);
		const [reorderedItem] = items.splice(source.index, 1);
		items.splice(destination.index, 0, reorderedItem);

		setMenu(items);

		const updatedOrder = items.map((group, index) => ({
			id: group.id,
			order: index + 1,
		}));
		updateGroupOrder(updatedOrder);
	};

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.addGroupBtn}
				onClick={() => setGroupEditor(true)}>
				<Icon icon="basil:add-solid" className={styles.icon} />
				Dodaj grupę
			</button>

			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="groups">
					{(provided) => (
						<div
							className={styles.menu}
							{...provided.droppableProps}
							ref={provided.innerRef}>
							{menu.map((group, index) => (
								<Draggable key={group.id} draggableId={group.id} index={index}>
									{(provided) => (
										<div
											className={styles.container}
											ref={provided.innerRef}
											{...provided.draggableProps}>
											<GroupHeading
												name={group.name}
												id={group.id}
												dragHandleProps={provided.dragHandleProps}
											/>
											{visibleGroup === group.id && (
												<DishList dishes={group.dishes} groupId={group.id} />
											)}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>

			{dishEditor && <DishEditor />}
			{groupEditor && <GroupEditor />}

			{loading && (
				<div className={styles.loaderBg}>
					<Loader />
				</div>
			)}
		</div>
	);
};
