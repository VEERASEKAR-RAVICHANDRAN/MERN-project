import React from 'react'
import './DropdownSecond.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Divider from '@mui/material/Divider';

// import './Dropdown.css'
const DropdownSecond = () => {
  return (
    <div>
        <div className="dropdown-container display-block display">
                      
            <Row>
                {/* dd 1 for buy */}
                <Col lg={1} className='dropdown fs-3 dropdown-show'>
                    <button className='dropbtn1'>Buy</button>
                    <Col className="dropdown-content1">
                        {/* <p className='fw-bold'>popular choices</p>
                        <a href="">ready to move</a>
                        <a href="">owner properties</a>
                        <a href="">budget homes</a> */}
                        <Row>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">owner properties</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                {/* dd 2 for rent */}
                <Col lg={1} className='dropdown fs-3 dropdown-show'>
                    <button className='dropbtn1'>Rent</button>
                    <Col className="dropdown-content1 advice-width">
                        <Row>
                        <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                {/* dd 3 for sell */}
                <Col lg={1} className='dropdown fs-3 dropdown-show'>
                    <button className='dropbtn1'>Sell</button>
                    <Col className="dropdown-content1 advice-width">
                        <Row>
                        <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                {/* dd 4 for home loan */}
                <Col  className='dropdown fs-3 '>
                    <button className='dropbtn1'>Loan</button>
                    <Col className="dropdown-content1 advice-width">
                        <Row>
                        <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                {/* dd 5 for home Interior */}
                <Col className='dropdown fs-3'>
                    <button className='dropbtn1'>Interior</button>
                    <Col className="dropdown-content1 advice-width">
                        <Row>
                        <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                            </Col>
                            <Col>
                                <p className='mb-2'>popular choices</p>
                                <Divider variant="middle" component="" />
                                <a href="">ready to move</a>
                                <a href="">owner properties</a>
                                <a href="">budget homes</a>
                                <a href="">budget homes</a>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                {/* dd 6 for MB Advice */}
                <Col  className='dropdown fs-3 justify-content-start'>
                    <button className='dropbtn1'>Advice</button>
                    <Col className="dropdown-content1 advice-width ">
                        <p className='fw-bold'>popular choices</p>
                        <a href="">ready to move</a>
                        <a href="">owner properties</a>
                        <a href="">budget homes</a>
                        {/* <span className='free'>NEW</span> */}
                    </Col>
                </Col>


                {/* dd 7 for help */}
                <Col lg={1} className='dropdown fs-3 dropdown-show'>
                    <button className='dropbtn1'>Help</button>
                    <Col className="dropdown-content1 help-width">
                        {/* <p className='fw-bold'>popular choices</p> */}
                        <a href="">Help center</a>
                        <a href="">Sales enquiry</a>
                        {/* <a href="">budget homes</a> */}
                    </Col>
                </Col>

                {/* empty col */}
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                {/* <Col></Col> */}


            </Row>
        </div>
    </div>
  )
}

export default DropdownSecond