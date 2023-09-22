import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "./api/network/apiEndPoints.js";
import {useEffect} from "react";
import {fetchUser} from "./api/redux/user/index.js";
import {ApiParam} from "./api/network/apiParams.js";



function App() {


    const dispath = useDispatch()
    // api call
    useEffect(() => {
        let param = {
            [ApiParam.format]: 'openapi',

        }
        let api_services = apiEndPoints
        dispath(fetchUser([api_services,param]))
    }, []);


    //get data
    let getData = useSelector(state => state.contact)
    console.log('getData' , getData?.posts?.definitions?.Country?.properties?.name?.title)
    const data = getData?.posts?.definitions?.Country?.properties?.name?.title;

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 Contactdata={data} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
