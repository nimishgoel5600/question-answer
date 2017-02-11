import React from 'react';

class Content extends React.Component{
	constructor(props) {
		super(props);
	}

	selectfun(index) {
		if(this.props.correct_status===null)
		{
			if(this.props.option===null)
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item';
			else if(this.props.option==='a'&&index==='a')
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected';
			else if(this.props.option==='b'&&index==='b')
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected';
			else if(this.props.option==='c'&&index==='c')	
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected';
			else if(this.props.option==='d'&&index==='d')
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected';
			else
				return 'ques_option is-clickable apply-mathjax js-ques-list-option-item';
		}
		else
		{
			if(this.props.correct_status===true)
			{
				if(this.props.option==='a'&&index==='a')
					return 	'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected  is-correct';
				else if(this.props.option==='b'&&index==='b')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected  is-correct';
				else if(this.props.option==='c'&&index==='c')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected  is-correct';
				else if(this.props.option==='d'&&index==='d')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected  is-correct';
				else
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item';
			}
			else
			{
				if(this.props.option==='a'&&index==='a')
					return 	'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected is-wrong';
				else if(this.props.option==='b'&&index==='b')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected is-wrong';
				else if(this.props.option==='c'&&index==='c')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected is-wrong';
				else if(this.props.option==='d'&&index==='d')
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item is-selected is-wrong';
				else
					return  'ques_option is-clickable apply-mathjax js-ques-list-option-item';	
			}
		}
	}
	handleClick(index) {
		let self=this;
		self.props.handleClick(index);
	}

	render(){
		return (
			<div className="testTool_contentArea js-content-area">
			    <div className="testTool_quesWrapper pv-60 js-ques-wrapper">
        			<div className="ques_item fade-out js-question fade-in" id="ques-1" data-id="250772" data-style="single correct" data-solution-available="0" data-already-attempted="0" data-correctly-answered="0" data-seen="0" data-action="true" data-n-selected-choices="0">
          				<div className="ques m-0 js-question-tile is-attempted is-correct" data-id="250772" data-style="single correct">
            				<div className="ques_content">
              					<form method="post" className="js-question-form">
                					<div className="ques_header cf">
	                  					<div className="ques_header_num"></div>
	                  					<div className="ques_header_vSeparator fl"></div>
	                  					<div className="ques_header_id">
	                    				68 69
	                  					</div>
                					</div>
                					<div className="ques_text apply-mathjax">
          								<p><span style={{ fontSize:18 }}> Select the&nbsp;<strong>incorrect</strong>&nbsp;match w.r.t. the animal shown with its key characteristics and the phylum to which it belongs.</span></p>

                					</div>
                			<div>
                  			<div className={this.selectfun('a')} data-choice_id="<p><span style={{fontSize:18}}>(a), (b) and (d)</span></p> " onClick={() => this.props.handleClick('a')} ><span className="ques_option_label fl">A</span>
                    			<div className="ques_option_content">
                      				<div className="ques_option_content_text">
                        			<p>What is your Name??</p>
                      				</div>
                    			</div>
	                    		<div className="ques_option_result">
	                      			<i className="fa fa-check-circle ques_option_result_iconCorrect"></i>
	                      			<i className="fa fa-times-circle ques_option_result_iconWrong"></i>
	                      			<div className="ques_option_result_text">Your Answer</div>
	                      			<div className="clr"></div>
	                    		</div>
	                    		<input type="checkbox" className="hide" name="choices" defaultValue={825133} />
	                    		<div className="clr"></div>
	                    		
                    
                  			</div>
                  			<div className={this.selectfun('b')} data-choice_id="<p><span style={{fontSize:18}}>(a) and (d)</span></p> " onClick={() => this.props.handleClick('b')} ><span className="ques_option_label fl">B</span>
                    			<div className="ques_option_content">
                      				<div className="ques_option_content_text">
                        			<p>Ram</p>
         							</div>
        						</div>
        						<div className="ques_option_result">
                      			
            					<i className="fa fa-check-circle ques_option_result_iconCorrect"></i>
                      			
            					<i className="fa fa-times-circle ques_option_result_iconWrong"></i>
            					<div className="ques_option_result_text">Your Answer</div>
            					<div className="clr"></div>
        					</div>
        					<input type="checkbox" className="hide" name="choices" defaultValue={825133} />
            				<div className="clr"></div>
            				
    					</div>
    					<div className={this.selectfun('c')} data-choice_id="<p><span style={{fontSize:18}}>Only (d)</span></p> " onClick={() => this.props.handleClick('c')} ><span className="ques_option_label fl">C</span>
        					<div className="ques_option_content">
            					<div className="ques_option_content_text">
                				<p>Shyam</p>
                      			</div>
                    		</div>
                    <div className="ques_option_result">
                      
                      <i className="fa fa-check-circle ques_option_result_iconCorrect"></i>
                      
                      <i className="fa fa-times-circle ques_option_result_iconWrong"></i>
                      <div className="ques_option_result_text">Your Answer</div>
                      <div className="clr"></div>
                    </div><input type="checkbox" className="hide" name="choices" defaultValue={825133} />
                    <div className="clr"></div>
                    {/*<div className="solution_text_container js-solution-text">
                      <div className="solution_heading">Solution</div>
                      <div className="js-solution-content">
                        <div className="testTool_qSolution_text solution_text"><p><span style={{fontSize:18}}>Sex cells develop in gastrodermis of sea anemone.</span></p>
</div>
                      </div>
                    </div>*/}
                  </div>
                  <div className={this.selectfun('d')} data-choice_id="<p><span style={{fontSize:18}}>(b), (c) and (d)</span></p> " onClick={() => this.props.handleClick('d')} ><span className="ques_option_label fl">D</span>
                    <div className="ques_option_content">
                      <div className="ques_option_content_text">
                        <p>Shubham</p>
                      </div>
                    </div>
                    <div className="ques_option_result">
                      
                      <i className="fa fa-check-circle ques_option_result_iconCorrect"></i>
                      
                      <i className="fa fa-times-circle ques_option_result_iconWrong"></i>
                      <div className="ques_option_result_text">Your Answer</div>
                      <div className="clr"></div>
                    </div><input type="checkbox" className="hide" name="choices" defaultValue={825133} />
                    <div className="clr"></div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        
        
        </div>

    </div>
    );

	}
}
export default Content;