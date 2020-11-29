import React, { Fragment } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Utility from '../../modules/Utility'
import { MdMoreVert as Bullet } from "react-icons/md";
import { BsStar as Star, BsSearch as Search } from "react-icons/bs";
import { FaRegEnvelope, FaChartPie, FaTags } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Button } from "reactstrap";
import {CgArrowLongRight, CgArrowLongLeft} from "react-icons/cg";
import TopMenu from '../../components/TopMenu';
import "../tests.scss";

class TestsPage extends React.Component {

    getCheckbox(cell, row) {
        return <div className="d-flex align-items-center pl-2">
            <input type="checkbox" />
            <Star className="ml-4 gold-star" />
        </div>
    }

    formatInviteCount(cell, row) {
        return <div className="cell-container d-flex flex-column align-items-center text-primary">
            <span>{cell}</span>
            <span className="mt-auto d-flex align-items-center">
                <FaRegEnvelope className="mr-1" />Invite
                </span>
        </div>
    }

    formatReportCount(cell, row) {
        return <div className="cell-container d-flex flex-column align-items-center text-primary">
            <span>{cell}</span>
            <span className="mt-auto d-flex align-items-center">
                <ImStatsBars className="mr-1" />Reports
        </span>
        </div>
    }

    formatInsight(cell, row) {
        return <div className="cell-container d-flex flex-column align-items-center text-primary">
            <span className="mt-auto d-flex align-items-center">
                <FaChartPie className="mr-1" />Insights</span>
        </div>
    }

    showDotMenu(cell, row) {
        return <div className="text-center text-primary">
            <Bullet className="cursor-pointer font-18" />
        </div>
    }

    formatTestSubject(cell, row) {
        return <div className="test-subject-info my-1">
            <span className="alert alert-success" role="alert">
                Active
            </span>
            {row.type && <span className="custom-tag ml-2">
                {row.type}
            </span>}
            <h5 className="text-info mb-1 mt-1">{cell}</h5>
            <div className="">
                <ul className="d-flex align-items-center text-gray-500 mb-0">
                    <li className="mr-2">Created by {row.created_by}</li>
                    <li className="mr-2 ml-4">Last Updated {row.last_updated}</li>
                    <li className="mr-2 ml-4">Questions: <span className="font-weight-bolder">{row.total_questions}</span></li>
                    <li className="ml-4">Duration: <span className="font-weight-bolder">{row.duration}</span> min</li>
                </ul>
            </div>
        </div>
    }

    showTestTable() {
        let { items, totalRecords } = Utility.getTestData();

        let options={
            page: 1,
            // sizePerPage: 10
            // paginationSize: 3
        }
        return <div className="common-table">
            <BootstrapTable data={items}
                remote={true}
                options={options}
                trClassName="commom-table-row cursor-pointer"
                pagination={false}
                fetchInfo={ {dataTotalSize: totalRecords}}
            >
                <TableHeaderColumn
                    isKey={true}
                    width="7%"
                    dataFormat={this.getCheckbox.bind(this)}
                    dataField='_id' />
                <TableHeaderColumn
                    width="55%"
                    dataFormat={this.formatTestSubject.bind(this)}
                    dataField='testSubject' />
                <TableHeaderColumn
                    width="10%"
                    dataFormat={this.formatInviteCount.bind(this)}
                    dataField='invite_count' />
                <TableHeaderColumn
                    width="10%"
                    dataFormat={this.formatReportCount.bind(this)}
                    dataField='report_count'></TableHeaderColumn>
                <TableHeaderColumn
                    width="10%"
                    dataFormat={this.formatInsight.bind(this)}
                    dataField='link' />
                <TableHeaderColumn
                    width="5%"
                    dataFormat={this.showDotMenu.bind(this)}
                    dataField='_id' />
            </BootstrapTable>
        </div>
    }

    getStatusWiseDropdown(){
        return <UncontrolledDropdown className="common-dropdown" style={{width: 190}}>
        <DropdownToggle caret tag="div" className="d-flex align-items-center w-100">
          <div className="d-flex flex-grow-1">All Active Tests (91)</div>
        </DropdownToggle>
        <DropdownMenu className="w-100">
          <DropdownItem >Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    }

    getLabelDropdown(){
        return <UncontrolledDropdown className="common-dropdown ml-4" style={{width: 170}}>
        <DropdownToggle caret tag="div" className="d-flex align-items-center w-100">
          <div className="d-flex flex-grow-1">All Test Labels</div>
        </DropdownToggle>
        <DropdownMenu className="w-100">
          <DropdownItem >Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    }

    getSearchTest(){
        return <InputGroup className="ml-4" style={{width: 250}}>
        <Input placeholder="Search Tests" />
        <InputGroupAddon addonType="append">
          <InputGroupText className="btn btn-primary text-white border-0">
            <Search />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    }

    getTagButton(){
        return <Button color="primary" className="text-white ml-4" >
            <FaTags/>
        </Button>
    }

    getCreateNewTestBtn(){
        return <Button color="primary" className="text-white ml-auto">
            Create New Test
        </Button>
    }

    getPaginator(){
        return <div className="d-flex align-items-center font-12 ml-4">
            <div className="text-gray-500">1-50 of 91</div>
            <Button  color="" className="btn pagination-btn ml-3">
                <CgArrowLongLeft />
            </Button>
            <Button  color="" disabled className="btn pagination-btn pagination-btn-disabled ml-2">
                <CgArrowLongRight />
            </Button>
        </div>
    }

    showPageHeader() {
        return <div className="page-header d-flex align-items-center">
            {this.getStatusWiseDropdown()}
            {this.getSearchTest()}
            {this.getLabelDropdown()}
            {this.getTagButton()}
            {this.getCreateNewTestBtn()}
            {this.getPaginator()}
        </div>
    }

    render() {
        return <Fragment>
            <TopMenu/>
            {this.showPageHeader()}
            <div className="page-container contain-page-header">
                {this.showTestTable()}
            </div>
        </Fragment>
    }
}

export default TestsPage
