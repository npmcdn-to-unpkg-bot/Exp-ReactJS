///////////////////////////////////////////COMPANY TO FOLLW SECTION START //////////////////
var FollowCompanyBox = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentDidMount: function() {

        var postData = {
            sig: '',
            uid: env_uid,
            cid: channel_Id,
            scid: subchannel_Id,
            type: 'comp',
            comp_type: 'all',
            base_server: 'monsterindia.noida',
            default_logo: 'n',
        };

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: postData,
            cache: false,
            success: function(data) {
                this.setState({
                    		data: data.DATA,
                    		type: data.TYPE
                		});
            }.bind(this),
            error: function(xhr, status, err) {
                //console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return ( 
		<div className = "commentBox" >
            		<CompaniesToFollow data = {this.state.data} type = { this.state.type}/> 
		</div>
        );
    }
});


var CompaniesToFollow = React.createClass({
    render: function() {
        var eachItem = this.props.data;
        var type = this.props.type;
        var cnt = 0;
        var compEachData = eachItem.map(function(compFollowData) {
            cnt++;
            if (cnt > 2) {
                return false;
            }
            return (<Comment compData = {compFollowData} > < /Comment>);
        });
        return (
		<div className = "commentList" > 
			{compEachData} 
		</div>
        	);
    }
});


var Comment = React.createClass({
    getInitialState: function() {
        return {
            displayFollwStr: 'Follow',
            follow_str: 'follow'
        };
    },
    componentDidMount: function() {
        if (this.props.compData.FOLLOW_STATUS == 1) {
            this.setState({
                displayFollwStr: 'Unfollow',
                follow_str: 'unfollow'
            });
        }
    },
    render: function() {

        return ( 
		<div className = "row clearfix cmp_block" >
            		<div className = "col-xs-4" >
            			<a className = "cmp_imgwrap" href = "#" >
					<img className = "cmp_img" src = "http://media.monsterindia.noida/seeker_2014/seeker_responsive/images/cmp1.jpg" / >
            			</a> 
				<div className = "cmp_jobs" > {this.props.compData.JOB_CNT} active jobs < /div> 
			</div> 
			<div className = "col-xs-8" >
            			<a className = "cmpname" href = "#" > {this.props.compData.NAME} < /a> 
				<div className = "cmp_txt" > {this.props.compData.IND} < /div> 
				<div className = "cmp_txt" > {this.props.compData.LOC} < /div> 
				<a className = "btn btn-brdr blnk" role = "button" onClick = {this.handleDelete.bind(this)}> {this.state.displayFollwStr} < /a> 
			</div> 
		</div>

        	);
    },
    handleDelete: function() {
        var postData = {
            CORP_ID: this.props.compData.ID,
            TYPE: this.state.follow_str
        };
        var url = "companyfollow.html";
        $.ajax({
            url: url,
            type: "DELETE",
            dataType: "json",
            data: postData,
            success: function(data) {
                this.setState({
                    displayFollwStr: 'followw'
                });
                this.setState({
                    comments: data
                });
            }.bind(this)
        });
    }
});




ReactDOM.render( < FollowCompanyBox url = "http://app.monsterindia.noida/company_suggestion.html" / > , document.getElementById('follow_company'));

//////////////////////////////// COMPANY TO FOLLW SECTION END /////////////////////////////////////////////////////



//////////////////////////////////////COMP UPDATE SECTION START///////////////////////


var CompUpdateBox = React.createClass({
    getInitialState: function() {
        return {        
            data: []            
        };                      
    },                          
    componentDidMount: function() {

        var postData = {
			sig         : '',
			uid         : env_uid,
			envbaseserver : 'monsterindia.noida',
			scid : subchannel_Id,
			cid : channel_Id,
			type : 'getPollSurvey',
                    };
        
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: postData,
            cache: false,
            success: function(data) {
                this.setState({
                                data: data.DATA,
                                type: data.TYPE
                                });
            }.bind(this),
            error: function(xhr, status, err) {
                //console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
                <div className = "commentBoxUpdt" >
                        <CompUpdate data = {this.state.data} type = { this.state.type}/>
                </div>
        );
    }
});

var CompUpdate = React.createClass({
    render: function() {
        var eachItem = this.props.data;
        var type = this.props.type;
        var cnt = 0;
        var compUpdtEachData = eachItem.map(function(compUpdateData) {
            cnt++;
            if (cnt > 2) {
                return false;
            }
            return (<CommentUpdt compData = {compUpdateData} > < /CommentUpdt>);
        });
        return (
                <div className = "commentList" >
                        {compUpdtEachData}
                </div>
                );
    }
});
      


var CommentUpdt = React.createClass({
        render: function() {

        return (
               		 <div className="comment">
        <h2 className="commentAuthor">
        </h2>
      </div>                );
    },
});



ReactDOM.render( <CompUpdateBox url = "http://app.monsterindia.noida/company_updates_api.html" / > , document.getElementById('comp_updt'));

//////////////////////////////////////COMP UPDATE SECTION END  ///////////////////////
