import { Table } from "antd";
import { useCallback, useEffect, useState } from "react";

const HomeClient = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Xếp hạng",
      dataIndex: "rank",
      key: "rank",
      render: (_, text, index) => <span>{index + 1}</span>,
    },
    {
      title: " Mã VJGR",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Thành viên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Độ tuổi",
      key: "age",
      dataIndex: "age",
      render: () => <span> - </span>,
    },
    {
      title: "Tăng giảm",
      key: "scoreChanges",
      dataIndex: "scoreChanges",
    },
  ];

  const fetchData = useCallback(async () => {
    setLoading(true);
    const url = `https://script.google.com/macros/s/AKfycbwtZ7LNbGt4oKuuP2pt1AU8CGCapIbypAizK0KJOohpFqx_847sfdShYiKiMjoYCT918g/exec`;
    const response = await fetch(url);
    const json = await response.json();

    setData(json.data);
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default HomeClient;
