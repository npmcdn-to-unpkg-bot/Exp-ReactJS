ReactDOM.render(
  <FollowCompanyBox url="http://my.monsterindia.noida/company_suggestion.html" />,document.getElementById('follow_company')
);


var FollowCompanyBox = React.createClass({
getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
        
        console.log(comment);
      return (
        <Comment author={comment.NAME} key={comment.ID}>
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var Comment = React.createClass({
  render: function() {
    return (
	<div className="row clearfix cmp_block">
        <div className="col-xs-4">
                <a className="cmp_imgwrap" href="#">
                <img className="cmp_img" src="http://media.monsterindia.noida/seeker_2014/seeker_responsive/images/cmp1.jpg">
                </a>
                <div className="cmp_jobs">32 active jobs</div>
        </div>
        <div className="col-xs-8">
                <a className="cmpname" href="#">EdgeVerve</a>
                <div className="cmp_txt">IT/ Computers - Software</div>
                <div className="cmp_txt">Bangalore</div>
                <a className="btn btn-brdr blnk" role="button" href="#">Follow</a>
        </div>
	</div>

     );
  }
});


