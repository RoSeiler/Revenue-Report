import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  id: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  
];

const App: React.FC = () => {
  const [data, setDataFetch] = useState<DataType[]>([]);

  useEffect(() => {
    console.log('Component App mounted');
    const fetchData = async () => {
      try {
        const API_URL = "https://reqres.in/api/users?page=2";
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { data } = await response.json();
        setDataFetch(data);
        console.log('Data updated:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data</h2>
      <Table columns={columns} dataSource={data.map(item => ({ ...item, key: item.id.toString() }))} /> 
      {/*mapeando los datos y asegurándonos de que la propiedad "key" sea una cadena única basada en la propiedad "id". 
      item.id.toString() para asegurarnos de que sea una cadena */}

    </div>
  );
}

export default App;








