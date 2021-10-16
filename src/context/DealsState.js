import axios from "axios";
import React, { useEffect, useState } from "react";
import { Base_url, endpoints } from "../contants";
import DealsContext from "./DealsContext";

function DealsState(props) {
  const [deals, setDeals] = useState([]);
  const [dealDetail, setDealDetail] = useState(null);
  const [filters, setFilters] = useState([{title:"On Sale",name:"isOnSale",checked: false}])

  useEffect(() => {
    axios.get(`${Base_url}${endpoints.deals}`).then((res) => {
      setDeals(res.data);
    });
  }, []);

  const getDealDetail = (id) => {
    axios.get(`${Base_url}${endpoints.deals}?id=${id}`).then((res) => {
      setDealDetail(res.data);
    });
  };

  const filterBySearch = (query) => {
    if (query) {
      axios.get(`${Base_url}${endpoints.deals}`).then((res) => {
        setDeals((allDeals) => {
            allDeals = res.data.filter((val) => val.title.toLowerCase().includes(query.toLowerCase()));
            return allDeals;
          });
      });
    } else {
      axios.get(`${Base_url}${endpoints.deals}`).then((res) => {
        setDeals(res.data);
      });
    }
  };

  const filterBySale = () => {
    setDeals((allDeals) => {
      let filteredDeals = allDeals.filter((val) => val.checked === "1");
      return filteredDeals;
    });
  };

  const applyFilter = (status,index) => {
      setFilters(allFilters=>{
          let newArr = [...allFilters]
          newArr[index] = {...newArr[index],checked:status}
          return newArr
        })
  }
  return (
    <DealsContext.Provider
      value={{ deals, dealDetail, getDealDetail, filterBySearch, filterBySale,applyFilter,filters }}
    >
      {props.children}
    </DealsContext.Provider>
  );
}

export default DealsState;
