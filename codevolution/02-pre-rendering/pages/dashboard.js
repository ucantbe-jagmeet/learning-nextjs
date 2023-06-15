import { useState, useEffect } from 'react';

function Dashboard() {
	const [ isLoading, setIsLoading ] = useState(true);
    const [ dashboardData, setDashboardData ] = useState(null);

	useEffect(() => {
		async function fetchDashBoardData() {
			const resp = await fetch('http://localhost:4000/dashboard');
			const data = await resp.json();

			setDashboardData(data);
			setIsLoading(false);
		}
        fetchDashBoardData()
	},[]);

    if(isLoading){
        return <h2>Loading....</h2>
    }

    return <>
        <div>
            <h2>Dashboard</h2>
            <hr />
            <h2>Posts - {dashboardData.posts} </h2>
            <h2>Likes - {dashboardData.likes} </h2>
            <h2>Followers - {dashboardData.followers} </h2>
            <h2>Following - {dashboardData.following} </h2>
        </div>
    </>

}
export default Dashboard;
