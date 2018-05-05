import React from 'react'
import {Table} from 'antd'

class UserList extends React.Component {
  render() {
    const columns = [{
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '直播间号码',
      dataIndex: 'livecode',
      key: 'livecode',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <span>删除</span>
        </span>
      ),
    }];
    
    const data = [{
      key: '1',
      username: 'klren',
      email: '605747907@qq.com',
      livecode: 'klren',
    }, {
      key: '2',
      username: 'Alarak',
      email: '4232332323@qq.com',
      livecode: 'alark',
    }];
    
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default UserList