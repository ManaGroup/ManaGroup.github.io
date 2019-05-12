import React from 'react';
import {Button, Icon, Input} from 'antd';

const filterDropdown = ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
    <div className="custom-filter-dropdown">
        <Input
            ref={ele => this.searchInput = ele}
            placeholder="متن جستجو"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={confirm}
        />
        <Button type="primary" onClick={confirm}>جستجو</Button>
        <Button onClick={clearFilters}>بازنشانی</Button>
    </div>
);


const filterIcon = filtered => <Icon type="smile-o" style={{color: filtered ? '#108ee9' : '#aaa'}}/>;

const onFilterDropdownVisibleChange = (visible) => {
    if (visible) {
        setTimeout(() => {
            this.searchInput.focus();
        });
    }
};

export const filterColumn = {
    filterDropdown, filterIcon, onFilterDropdownVisibleChange
};

export function query(pagination, filters, sorter) {

    let data_filters = {};
    filters && Object.entries(filters).forEach(([k, v]) => data_filters[k] = v[0]);

    return {
        page: pagination.current,
        limit: pagination.pageSize,
        sortBy: sorter.field,
        order: sorter.order,
        filters: data_filters,
    }
}

export function getPaginationData(data) {
    return {
        current: parseInt(data.page, 10),
        total: data.total,
        pageSize: data.limit
    }
}
