import { Dropdown, Menu, TableProps } from "antd";
import { Button, Space, Table } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { useState } from "react";
import "antd/dist/antd.css";
import "./Table.scss";
interface DataType {
  key: number;
  organization: string;
  username: string;
  email: string;
  phonenumber: string;
  date: string;
  status: string;
}

const Tablee = ({
  data,
  menu,
  setactiveUser,
  ...props
}: {
  data: DataType[];
  menu: any;
  setactiveUser: Function;
}) => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "organization",
      dataIndex: "organization",
      key: "organization",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
      ],
      filteredValue: filteredInfo.name || null,
      ellipsis: true,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
      ],
      filteredValue: filteredInfo.name || null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.address || null,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone number",
      dataIndex: "phonenumber",
      key: "phonenumber",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.address || null,
      ellipsis: true,
    },
    {
      title: "Date joined",
      dataIndex: "date",
      key: "date",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.address || null,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.address || null,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: (_, record: { key: React.Key }) => (
        <Space size="middle">
          <Dropdown overlay={menu}>
            <a onClick={() => setactiveUser(record.key)}>
              <img src="/vectors/more.svg" alt="" />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Tablee;
