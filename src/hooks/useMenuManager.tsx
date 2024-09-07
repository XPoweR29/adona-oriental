import { useContext } from "react";
import { ApiResponse, Dish, DishGroup } from "../types/types";
import { AppContext } from "../components/Context/AppContext";

export const useMenuManager = () => {
	const { setMenu, setLoading } = useContext(AppContext)!;

	const refreshMenuList = async () => {
		setLoading(true);
		const currentMenu = await getMenu();
		if (currentMenu) setMenu(currentMenu);
		setLoading(false);
	};

	const getMenu = async (): Promise<DishGroup[]> => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://backendapp-gamma.vercel.app/api/adona"
				);

				if (!response.ok) throw new Error("Błąd podczas pobierania menu");
				const menu: DishGroup[] = await response.json();
			return menu;
		} catch (err) {
			console.error(err);
			return [];
		} finally {setLoading(false)}
	};

	const addGroup = async (groupName: string) => {
		setLoading(true);
		try {
			const rawRes = await fetch(
				"https://backendapp-gamma.vercel.app/api/adona/group",
				{
					method: "POST",
					body: JSON.stringify({ name: groupName }),
					headers: { "Content-Type": "application/json" },
				}
			);
			const response: ApiResponse = await rawRes.json();

			if (!rawRes.ok) {
				alert(response.message);
			}
			await refreshMenuList();
		} catch (err) {
			console.error(err);
		} finally {setLoading(false)}
	};

	const removeGroup = async (id: string) => {
		setLoading(true);
		try {
			if (
				window.confirm(
					"Czy na pewno chcesz usunąć grupę wraz z jej wszystkimi pozycjami?"
				)
			) {
				const rawRes = await fetch(
					`https://backendapp-gamma.vercel.app/api/adona/group/${id}`,
					{ method: "DELETE" }
				);
				const response: ApiResponse = await rawRes.json();
				alert(response.message);
			}
			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	const editGroup = async (groupName: string, id: string) => {
		setLoading(true);
		try {
			const rawRes = await fetch(
				`https://backendapp-gamma.vercel.app/api/adona/group/${id}`,
				{
					method: "PATCH",
					body: JSON.stringify({ name: groupName }),
					headers: { "Content-Type": "application/json" },
				}
			);
			const response: ApiResponse = await rawRes.json();
			alert(response.message);

			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	const createGroup = async (data: { name: string }) => {
		setLoading(false);
		try {
			const fetchData = await fetch(
				`https://backendapp-gamma.vercel.app/api/adona/group`,
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: { "Content-Type": "application/json" },
				}
			);

			const response: ApiResponse = await fetchData.json();
			alert(response.message);

			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	const updateGroupOrder = async(updatedOrder: {id: string, order: number}[]) => {
		try {
			const fetchData = await fetch(
				"https://backendapp-gamma.vercel.app/api/adona/group",
				{
					method: "PATCH",
					body: JSON.stringify(updatedOrder),
					headers: { "Content-Type": "application/json" },
				}
			);

			if(!fetchData.ok) throw new Error("Błąd podczas indeksowania");
			console.log('Poprawnie zindeksowano!');
		} catch(err) {
			console.error(err);
		}
	}

	//dishManager

	const createDish = async (data: Partial<Dish & { groupId: string }>) => {
		setLoading(true);
		try {
			const fetchData = await fetch(
				`https://backendapp-gamma.vercel.app/api/adona/dish`,
				{
					method: "POST",
					body: JSON.stringify({
						name: data.name,
						engName: data.engName,
						price: Number(data.price),
						groupId: data.groupId,
					}),
					headers: { "Content-Type": "application/json" },
				}
			);

			const response: ApiResponse = await fetchData.json();
			alert(response.message);

			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	const removeDish = async (id: string, name: string) => {
		setLoading(true);
		try {
			if (window.confirm(`Czy na pewno chcesz usunąć danie "${name}"`)) {
				const rawRes = await fetch(
					`https://backendapp-gamma.vercel.app/api/adona/dish/${id}`,
					{ method: "DELETE" }
				);
				const response: ApiResponse = await rawRes.json();
				alert(response.message);
			}
			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	const editDish = async (data: Partial<Dish>) => {
		setLoading(true);
		try {
			const rawRes = await fetch(
				`https://backendapp-gamma.vercel.app/api/adona/dish/${data.id}`,
				{
					method: "PATCH",
					body: JSON.stringify({
						name: data.name,
						engName: data.engName,
						price: Number(data.price)
					}),
					headers: { "Content-Type": "application/json" },
				}
			);
			const response: ApiResponse = await rawRes.json();
			alert(response.message);

			await refreshMenuList();
		} catch (err) {
			return console.error(err);
		} finally {setLoading(false)}
	};

	return {
		getMenu,
		addGroup,
		removeGroup,
		editGroup,
		createGroup,
		createDish,
		removeDish,
		editDish,
		refreshMenuList,
		updateGroupOrder
	};
};
