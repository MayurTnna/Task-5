import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import "../../../assets/scss/invoice.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Invoice = () => {
	const componentRef = useRef(null);
	const items = useSelector((state) => state.cartReducer.data);
	const total_price = useSelector((state) => state.cartReducer.total_price);
	const userData = JSON.parse(localStorage.getItem("user")) || [];
	const now = new Date();
	console.log(now);

	return (
		<>
			<div ref={componentRef} className="invoice_main_container">
				<div className="container">
					<div className="row gutters">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="card">
								<div className="card-body p-0">
									<div className="invoice-container">
										<div className="invoice-header">
											<div className="row gutters">
												<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"></div>
											</div>
											<div className="row gutters">
												<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
													<Link to="/product">
														<a
															href="#"
															className="invoice-logo text-decoration-none"
														>
															Buzzzzarrrr
														</a>
													</Link>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6">
													<address className="text-right">
														Maxwell admin Inc, 45 NorthWest Street.
														<br />
														Sunrise Blvd, San Francisco.
														<br />
														00000 00000
													</address>
												</div>
											</div>
											{userData &&
												userData.map((item) => {
													return (
														<div className="row gutters">
															<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
																<div className="invoice-details">
																	<address>
																		{item.first_name} {item.last_name}
																		<br />
																		{item.mobile_no} Church Street, Florida, USA
																	</address>
																</div>
															</div>
															<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
																<div className="invoice-details">
																	<div className="invoice-num">
																		<p className="text-light m-0 text-center">
																			Invoice - #009
																		</p>
																		<p className="text-light m-0 text-center">
																			{now.toString()}
																		</p>
																	</div>
																</div>
															</div>
														</div>
													);
												})}
										</div>

										<div className="invoice-body">
											<div className="row gutters">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="table-responsive">
														<table className="table custom-table m-0">
															<thead>
																<tr>
																	<th>Items</th>
																	<th>Product ID</th>
																	<th>Quantity</th>
																	<th>Sub Total</th>
																</tr>
															</thead>
															<tbody>
																{items &&
																	items.map((item) => {
																		return (
																			<tr>
																				<td>
																					{item.title}
																					<p className="m-0 text-light">
																						{item.description}
																					</p>
																				</td>
																				<td>
																					SS0{item.id * 9}
																					{item.id + 1}592{item.id - 1}
																					{item.id}0
																				</td>
																				<td>{item.total}</td>
																				<td>${item.price}</td>
																			</tr>
																		);
																	})}

																<tr>
																	<td>&nbsp;</td>
																	<td colspan="2">
																		<p>
																			Subtotal
																			<br />
																			Shipping &amp; Handling
																			<br />
																			Tax
																			<br />
																		</p>
																		<h5 className="text-success">
																			<strong>Grand Total</strong>
																		</h5>
																	</td>
																	<td>
																		<p>
																			${total_price}
																			<br />
																			$100.00
																			<br />
																			$49.00
																			<br />
																		</p>
																		<h5 className="text-success">
																			<strong>
																				${total_price + 100.0 + 49.0}
																			</strong>
																		</h5>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>

										<div className="invoice-footer text-success">
											Thank you for visiting
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ReactToPrint
				trigger={() => (
					<button className="btn btn-secondary" onClick={() => window.print()}>
						Print
					</button>
				)}
				content={() => componentRef.current}
				onAfterPrint={() => toast.success("Invoice generated successfully")}
			/>
		</>
	);
};
export default Invoice;
