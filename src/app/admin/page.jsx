"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Title, BarChart, DonutChart } from "@tremor/react";

const page = () => {
  const [count, setCount] = useState();
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/ip", {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_BACKEND_TOKEN,
        },
      })
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err));

    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/ipdetailed", {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_BACKEND_TOKEN,
        },
      })
      .then((res) => {
        const countries = [];
        res.data.map((country) => {
          const data = {
            name: country.country,
            count: country.count,
          };
          countries.push(data);
        });
        setCountries(countries);
        console.log(countries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/*
      <h1 className="pb-2 text-xl text-green-500 ">
        Welcome To Admin Panel !!
      </h1>
      <h2>Total Visitors Count : {count}</h2>
      <ul>
        {countries?.map((c, index) => (
          <li key={index}>
            {c.country} : {c.count}
          </li>
        ))}
      </ul>
      */}
      <Card style={{ borderRadius: 0 }} className="h-screen">
        <Title>Total View Count : {count}</Title>
        <BarChart
          className="mt-6"
          data={countries}
          index="name"
          categories={["count"]}
          colors={["blue"]}
          yAxisWidth={48}
        />

        <DonutChart
          className="mt-6"
          data={countries}
          category="count"
          index="name"
          variant="pie"
        />
      </Card>
    </div>
  );
};

export default page;
