var WorkHistory = React.createClass({
          
			      propTypes: {
			          id: React.PropTypes.string.isRequired,
			          designation: React.PropTypes.string,
			          companyName: React.PropTypes.string,
			          duration: React.PropTypes.string,
			          salary: React.PropTypes.string
			      },      
			              
			      getDefaultProps: function() {
			          return {
			              designation: null,
				          companyName: null,
				          duration: null,
				          salary: null,
				          whId : null,
				          workHistoryAPI: 'http://my.monsterindia.noida/edit-work-history.html',
			          };  
			      }, 
			      getInitialState: function() {
			      	var flag  = false;
			      	var companyNameFilled = "form-control";
			      	var designationFilled = "form-control";
			      	var toDateFilled = "form-control month_picker";
			      	var fromDateFilled = "form-control month_picker";
			      	var salaryFilled = "";
			      	this.switchForInitializing = true; //This is a switch  to fill value only the first time and whenever it makes 										sense
			      	 if (this.props.currentEmployerFlag == "1")
			      	 {
			      	 	flag = true;
			      	 }
			      	 //"filled" class is added if a form element is not empty
			      	 if (this.props.companyName != "")
			      	 {
			      	 	companyNameFilled = "form-control  filled";
			      	 }
			      	 if (this.props.designationFilled != "")
			      	 {
			      	 	designationFilled = "form-control filled";
			      	 }
			      	 if (this.props.endDate != "")
			      	 {
			      	 	toDateFilled = "form-control month_picker filled";
			      	 }
			      	 if (this.props.startDate != "")
			      	 {
			      	 	fromDateFilled = "form-control month_picker filled";
			      	 }
			          return {
			              clickEdit : false,
			              deleteMyself : false, //By default DO NOT delete this component otherwise The Sith Lord will curse you.
			              currentEmployerFlag: this.props.currentEmployerFlag,
			              currentEmployerFlagBinary: flag,
			              designationFilled: designationFilled,
			              companyNameFilled: companyNameFilled,
			              toDateFilled: toDateFilled,
			              fromDateFilled: fromDateFilled,
			              designation: this.props.designation,
			              companyName: this.props.companyName,
			              duration: this.props.duration,
			              salary: this.props.salary,
			              startDate: this.props.startDate,
			              endDate: this.props.endDate,
			              addNewWorkHistory: false,
			              prepareNewWorkHistoryDOM: false,
			              newComponentCounter: 0,
			              newComponentsArray: [],
			              newComponentIndexForEditing: -1, 
			          }
			      },

			      componentDidUpdate: function() {
			      	//Called whenever we click the edit icon
			      	console.log('componentDidUpdate called');
			      	if (this.switchForInitializing)
			      	{
			      		//The edit form is populated and alllows the user to update these values
			      		//"switchForInitializing" controls this feature
				      	this.refs.updatedDesignation.value = this.state.designation;
					 	this.refs.updatedCompanyName.value = this.state.companyName;
					 	this.refs.updatedToDate.value = this.state.endDate;
					 	this.refs.updatedFromDate.value = this.state.startDate;
					 	this.refs.switchForInitializing = false;
				    }
				    else
				    {
				    	this.refs.updatedDesignation.value = this.state.newComponentsArray[this.state.newComponentIndexForEditing].designation;
				    	this.refs.updatedCompanyName.value = this.state.newComponentsArray[this.state.newComponentIndexForEditing].companyName;
					 	this.refs.updatedToDate.value = this.state.newComponentsArray[this.state.newComponentIndexForEditing].endDate;
					 	this.refs.updatedFromDate.value = this.state.newComponentsArray[this.state.newComponentIndexForEditing].startDate;
					 	this.refs.switchForInitializing = false;
				    }
			      },

			      componentWillUpdate: function(){
			      	console.log('componentWillUpdate called');
			      },

			      componentDidMount: function() {
			      	 //Only one time
				  },

			      handleEdit : function(){
				      	this.setState({clickEdit:!this.state.clickEdit});
				      	this.switchForInitializing = true;
			      },
			      
			      newComponentHandleEdit : function(newComponentIndex){
			      		console.log("new comp index=" + newComponentIndex);
			      		this.setState({clickEdit:!this.state.clickEdit});
				      	this.switchForInitializing = false;
				      	this.setState({newComponentIndexForEditing : newComponentIndex})

			      },

			      handleDelete: function(newComponentIndex){
			      		var wh_id = '';
			      		if(confirm('Delete the item?'))
			      		{
			      			if (newComponentIndex == -1)
			      			{
			      				//If the component is NOT newly added
			      				wh_id = this.props.whId;
			      			}
			      			else
			      			{
			      				wh_id = this.state.newComponentsArray[newComponentIndex].wh_id;
			      			}
			      			var urlToHit = this.props.workHistoryAPI;
			      			jQuery.ajax({
						      url: urlToHit,
						      type: 'POST',
						      dataType: 'json',
						      data: {
						      	action: "delete",
						      	wh_id : wh_id
						      },
						      beforeSend: function () {
						        // this.setState({loading: true});
						      },
						      success: function(data){
						      	//Setting the non-editable values in the UI to the new updated values
						      	
						        if (newComponentIndex == -1)
				      			{
				      				//If the component is NOT newly added
				      				this.setState({
				      					deleteMyself : true,
				      					clickEdit : false,
				      				});
				      			}
				      			else
				      			{
				      				this.state.newComponentsArray.splice(newComponentIndex, 1);//splice 1 item on newComponentIndex
							        this.setState({
							        				editFlag : false, 
							        				newComponentCounter: --this.state.newComponentCounter,
							        				newComponentsArray: this.state.newComponentsArray,
							        			  }); // The ultimate suicide. (Delete this component because it's been 											 requested)
				      			}
				      			this.switchForInitializing = true;
						      }.bind(this),
						      error: function(xhr, status, err) {
						        console.log('failed::' + err);
						      	this.handleEdit;
						       }.bind(this)
						    });
			      		}
			      },

			      handleUndoDelete:function(){
			      		this.setState({deleteMyself : false}); // The ultimate resurrection. Back from the dead.
			      },

			      handleCancel: function(){
			      		console.log('handleCancel called');
			      		this.setState({clickEdit:!this.state.clickEdit});
			      		console.log(this.state.addNewWorkHistory);
			      },

			      handleNewCancel: function(){
			      	console.log('handleNewCancel called');
			      	this.setState({clickEdit:false, addNewWorkHistory:false});
			      },

			      handleCurrentEmployerCheckBox: function(){
					 	this.setState({designation : this.refs.updatedDesignation.value,
					 				  companyName : this.refs.updatedCompanyName.value,
					 				  endDate : this.refs.updatedToDate.value,
					 				  startDate : this.refs.updatedFromDate.value,
					 					});
			      		if(this.state.currentEmployerFlag=="0")
			      		{
			      			this.setState({currentEmployerFlag:"1"});
			      			this.setState({currentEmployerFlagBinary:true});
			      		}
			      		else
			      		{
			      			this.setState({currentEmployerFlag:"0"});
			      			this.setState({currentEmployerFlagBinary:false});
			      		}
			      },

			      handleAddNewWorkHistory: function(event){
			      		this.setState({addNewWorkHistory: true});
			      },

			      handleAddNewWorkHistorySubmit: function(event){
			      		console.log("handleAddNewWorkHistorySubmit called");
			      		event.preventDefault();
			      		var urlToHit = this.props.workHistoryAPI;
			      		var newCurrentEmployerFlag = 0;
			      		if (this.refs.newCurrentEmployerFlag.checked)
			      		{
			      			newCurrentEmployerFlag = 1;
			      		}
				      		jQuery.ajax({
						      url: urlToHit,
						      type: 'POST',
						      dataType: 'json',
						      data: {
						      	action: "add",
						        designation: this.refs.newDesignation.value,
						        company_name: this.refs.newCompanyName.value,
						        ctc_lacs: "",
						        ctc_thousands: "",
						        date_from_month: "",
						        date_from_year: "",
						        date_to_month: "",
						        date_to_year: "",
						        current_company: newCurrentEmployerFlag
						      },
						      beforeSend: function () {
						        // this.setState({loading: true});
						      },
						      success: function(data){
						      	//Setting the non-editable values in the UI to the new updated values
						        this.setState({ clickEdit:false, 
						        				prepareNewWorkHistoryDOM: true,
						        				addNewWorkHistory: false,
						        				newComponentCounter: ++this.state.newComponentCounter,
						        				newComponentsArray: this.state.newComponentsArray.concat(
						        									[{ 
						        										'designation' :  this.refs.newDesignation.value,
						        										'companyName' : this.refs.newCompanyName.value,
						        										'startDate' : this.refs.newFromDate.value,
						        										'endDate' : this.refs.newToDate.value,
						        										'salary' : this.refs.newSalary.value,
						        										'wh_id' : data.WH_ID,
						        									}]
						        									),
						        			});
				      			this.switchForInitializing = true;
						      }.bind(this),
						      error: function(xhr, status, err) {
						        console.log('failed::' + err);
						      	this.handleEdit;
						       }.bind(this)
						    });
			      },

			      handleWorkHistoryUpdate: function(event){
			      		event.preventDefault();
			      		var urlToHit = this.props.workHistoryAPI;
				      		jQuery.ajax({
						      url: urlToHit,
						      type: 'POST',
						      dataType: 'json',
						      data: {
						      	action : "update",
						        designation: this.refs.updatedDesignation.value,
						        company_name: this.refs.updatedCompanyName.value,
						        ctc_lacs: "",
						        ctc_thousands: "",
						        date_from_month: "",
						        date_from_year: "",
						        date_to_month: "",
						        date_to_year: "",
						        wh_id: this.refs.wh_id_from_form.value,
						        current_company: this.state.currentEmployerFlag	
						      },
						      beforeSend: function () {
						        // this.setState({loading: true});
						      },
						      success: function(data){
						      	//Setting the non-editable values in the UI to the new updated values

						      	var index = this.state.newComponentIndexForEditing;	
						      	console.log('index=' + index);
						      	console.log( this.refs.updatedFromDate.value);
						      	if (index != -1)
						      	{
						      		console.log('inside if');
						      		this.switchForInitializing = false;
						      		//When a new work history is added and updated
						      		//https://facebook.github.io/react/docs/update.html
							      	// this.setState(React.addons.update(this.state.newComponentsArray, {index: 
			      					// 						{\$set: {
														//       			designation : this.refs.updatedDesignation.value,
												  //       				salary : this.refs.updatedSalary.value,
												  //       				companyName: this.refs.updatedCompanyName.value,
												  //       				startDate: this.refs.updatedFromDate.value,
												  //       				endDate: this.refs.updatedToDate.value
														// 	      	}
			      					// 						}}));
									var tempArr = this.state.newComponentsArray;
									tempArr[index] = {designation : this.refs.updatedDesignation.value,
												        				salary : this.refs.updatedSalary.value,
												        				companyName: this.refs.updatedCompanyName.value,
												        				startDate: this.refs.updatedFromDate.value,
												        				endDate: this.refs.updatedToDate.value,
												        				 clickEdit: !this.state.clickEdit,
												        			}
									this.setState({newComponentsArray : tempArr});
							      	// this.setState(React.addons.update(this.state.newComponentsArray[index], 
							      	// 	{
							      	// 		designation : {\$set: this.refs.updatedDesignation.value},
					        	// 			salary : {\$set: this.refs.updatedSalary.value},
					        	// 			companyName: {\$set: this.refs.updatedCompanyName.value},
					        	// 			startDate: {\$set: this.refs.updatedFromDate.value},
					        	// 			endDate: {\$set: this.refs.updatedToDate.value}
							      	// 	}));
							      	console.log('new== ' + this.state.newComponentsArray[0].startDate);
						      	}
						      	else
						      	{
						      		//When the existing work history is updated 
						        	this.setState({ clickEdit:!this.state.clickEdit, 
						        				designation : this.refs.updatedDesignation.value,
						        				salary : this.refs.updatedSalary.value,
						        				companyName: this.refs.updatedCompanyName.value,
						        				startDate: this.refs.updatedFromDate.value,
						        				endDate: this.refs.updatedToDate.value
						        				// duration : this.refs.updatedDuration.value,
						        	});
						        	this.switchForInitializing = true;
						        }	
						      }.bind(this),
						      error: function(xhr, status, err) {
						        console.log('failed::' + err);
						      	this.handleEdit;
						       }.bind(this)
						    });
			      },

			      returnHtml : function(){
			      			console.log("returnHtml called");
			      			console.log("deleteMyself = " + this.state.deleteMyself + this.state.clickEdit);
				      		
				      		if (this.state.addNewWorkHistory)
				      		{
				      			return <div className="mnp_wrapinnr" id="work_h_edit">
							              <form className="edit_form" onSubmit={this.handleAddNewWorkHistorySubmit} >
							                    <div className="row">
							                        <div className="col col-sm-6">
							                            <div className="placeholder_cmmn">
							                            <input type="text" className="form-control" ref="newDesignation" id="in5" name="designation" />
							                            <label htmlFor="in5">Designation</label>
							                            </div>
							                        </div>
							                        <div className="col col-sm-6">
							                                <div className="placeholder_cmmn">
							                            <input type="text" className="form-control" ref="newCompanyName" id="in6" name="company_name" />
							                            <label htmlFor="in6">Company</label>
							                            </div>
							                        </div>
							                        <div className="col col-sm-6">
							                        <div className="cal_wrap">
							                            <div className="placeholder_cmmn">
							                            <input type="text" className="form-control" data-date-viewmode="years" data-date-minviewmode="months" data-date-format="mm/yyyy"  ref="newFromDate" id="in7" name="date_from_month" />
							                            <label htmlFor="in7">From</label>
							                            </div>
							                        </div>
							                        </div>
							                        <div className="col col-sm-6">
							                         <div className="cal_wrap">
							                            <div className="placeholder_cmmn">
							                            <input type="text" className="form-control" data-date-viewmode="years" data-date-minviewmode="months" data-date-format="mm/yyyy"  ref="newToDate" id="in8" name="date_to_month" />
							                            <label htmlFor="in8">To</label>
							                            </div>
							                        </div>
							                        </div>
							                        <div className="col col-sm-6">
							                              <select className="form-control" ref="newSalary">
							                                  <option>{this.props.salary}</option>
							                              </select>
							                        </div>
							                         <div className="col col-sm-6">
							                         <div className="checkbox custom"> 
							                         	<input type="checkbox" id="current_emp" name="newCompany" ref="newCurrentEmployerFlag"></input>
							                         	<label htmlFor="current_emp"> Current Employer</label> </div>
							                         </div>
							                    </div>
							                    
							                    <div className="text-right">
							                    <input type="submit" className="btn save_btn" value="Save"  />
							                    <a href="#work_h" className="btn cancel_btn pf_hideaction" onClick={this.handleNewCancel}>Cancel</a>
							                </div>
							            </form>
				      			</div>;
				      		}
				      		
				      		if(!this.state.clickEdit)
				      		{
				      				var HtmlContent = 
				      				<div>
					      			
							         {(() => { 
							         	if(this.state.deleteMyself)
							         	{
							         		return
							         	}
							         	else
							         	{
							         		return <div className="mn_skillitem">
										            <div className="mnp_wrapinnr">
										              <div className="row">
										                <div className="col-xs-9">
										                  <div className="row">
										                    <div className="col-md-5">
										                      <div className="mn_hc">{this.state.designation}</div>
										                      <div className="mn_htxt no_mbtm">at {this.state.companyName}</div>
										                    </div>
										                    <div className="col-md-5">
										                      <div className="mn_htxt no_mbtm">{this.state.startDate} - {this.state.endDate}  {this.state.duration}<br/>
										                        {this.state.salary}</div>
										                    </div>
										                  </div>
										                </div>
										                <div className="col-xs-3 text-right"> <a href="#work_h" className="mn_bibtn ico1" data-toggle="tooltip" data-placement="left" title="Edit" onClick={this.handleEdit}></a> <a href="#deleteWorkHistory" className="mn_bibtn ico2" data-toggle="tooltip" data-placement="left" title="Delete" onClick={this.handleDelete.bind(this, -1)}></a> </div>
										              </div>
										            </div>
										          </div>
							         	}
							         })()} 
							         {Array.apply(this.state.newComponentsArray, Array(this.state.newComponentCounter)).map(function(temp, i){
							      			return <div className="mn_skillitem">
									            <div className="mnp_wrapinnr">
									              <div className="row">
									                <div className="col-xs-9">
									                  <div className="row">
									                    <div className="col-md-5">
									                      <div className="mn_hc">{this.state.newComponentsArray[i].designation}</div>
									                      <div className="mn_htxt no_mbtm">at {this.state.newComponentsArray[i].companyName}</div>
									                    </div>
									                    <div className="col-md-5">
									                      <div className="mn_htxt no_mbtm">{this.state.newComponentsArray[i].startDate} - {this.state.newComponentsArray[i].endDate}  {this.state.newComponentsArray[i].duration}<br/>
									                        {this.state.newComponentsArray[i].salary}</div>
									                    </div>
									                  </div>
									                </div>
									                <div className="col-xs-3 text-right"> <a href="#work_h" className="mn_bibtn ico1" data-toggle="tooltip" data-placement="left" title="Edit" onClick={this.newComponentHandleEdit.bind(this, i)}></a> <a href="#deleteWorkHistory" className="mn_bibtn ico2" data-toggle="tooltip" data-placement="left" title="Delete" onClick={this.handleDelete.bind(this, i)}></a> </div>
									              </div>
									            </div>
							          </div>
					                }, this)}

							          ~;
							            if (scalar(@{$data}) == $i) {
									          $Html_curcomp .= qq~<div className="mnp_wrapinnr">
										            <div className="mn_rgtbtn text-right"> 
										            	<a href="#add_new_work_history" className="btn a_rgtbtn" onClick={this.handleAddNewWorkHistory}>Add New</a> 
										            </div>
										      </div>~;
										       }
										       $Html_curcomp .= qq~</div>;
								
					      	}
					      	else
					      	{
					      			
					      				var HtmlContent = 
					      						<div className="mnp_wrapinnr" id="work_h_edit">
									            <form className="edit_form" onSubmit={this.handleWorkHistoryUpdate} >
									            		<input type="hidden" ref="wh_id_from_form" value={this.props.whId} />
									                    <div className="row">
									                        <div className="col col-sm-6">
									                            <div className="placeholder_cmmn">
									                            <input type="text" className={this.state.designationFilled} ref="updatedDesignation" id="in5" name="designation" />
									                            <label htmlFor="in5">Designation</label>
									                            </div>
									                        </div>
									                        <div className="col col-sm-6">
									                                <div className="placeholder_cmmn">
									                            <input type="text" className={this.state.companyNameFilled} ref="updatedCompanyName" id="in6" name="company_name" />
									                            <label htmlFor="in6">Company</label>
									                            </div>
									                        </div>
									                        <div className="col col-sm-6">
									                        <div className="cal_wrap">
									                            <div className="placeholder_cmmn">
									                            <input type="text" className={this.state.toDateFilled} data-date-viewmode="years" data-date-minviewmode="months" data-date-format="mm/yyyy"  ref="updatedFromDate" id="in7" name="date_from_month" />
									                            <label htmlFor="in7">From</label>
									                            </div>
									                        </div>
									                        </div>
									                        <div className="col col-sm-6">
									                         <div className="cal_wrap">
									                            <div className="placeholder_cmmn">
									                            <input type="text" className={this.state.fromDateFilled} data-date-viewmode="years" data-date-minviewmode="months" data-date-format="mm/yyyy"  ref="updatedToDate" id="in8" name="date_to_month" />
									                            <label htmlFor="in8">To</label>
									                            </div>
									                        </div>
									                        </div>
									                        <div className="col col-sm-6">
									                              <select className="form-control" ref="updatedSalary">
									                                  <option>{this.props.salary}</option>
									                              </select>
									                        </div>
									                         <div className="col col-sm-6">
									                         <div className="checkbox custom"> 
									                         	<input type="checkbox" id="current_emp" checked={this.state.currentEmployerFlagBinary} onChange={this.handleCurrentEmployerCheckBox} name="current_company"></input>
									                         	<label htmlFor="current_emp"> Current Employer</label> </div>
									                         </div>
									                    </div>
									                    
									                    <div className="text-right">
									                    <input type="submit" className="btn save_btn" value="Save"  />
									                    <a href="#work_h" className="btn cancel_btn pf_hideaction" onClick={this.handleCancel}>Cancel</a>
									                </div>
									            </form>
					      			</div>;
					      	}
					      	return HtmlContent;
			      },
			      render: function() {
			          var self = this;
			          var count = 1;
			          var checkBoxBindId = '';
			          	
			          return (
					             this.returnHtml()
					          )
					      },

					  });


