import React from 'react';

export default class Pager extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  buildPageButtons() {
    var btnIdx
    if((this.props.meta.get('total_pages') - this.props.meta.get('current_page')) < 2) {
      btnIdx = (parseInt(this.props.meta.get('current_page')) - 4) + (this.props.meta.get('total_pages') - this.props.meta.get('current_page'))
    } else {
      btnIdx = Math.max(1, (parseInt(this.props.meta.get('current_page')) - 2))
    }
    var btns = [];
    [...Array(5)].map((x, i) =>{
      let bI = btnIdx;
      btns.push(<li key={i} className="page-item" onClick={() => this.props.setPage(bI)}><button className="page-link">{btnIdx}</button></li>);
      btnIdx++;
    })

    return btns;
  }

  render()  {
    return (
      <nav className="pager-container">
        <ul className="pagination">
          <li className="page-item" onClick={() => this.props.setPage(1)}><button className="page-link">First</button></li>
          <li className="page-item" onClick={() => this.props.setPage((parseInt(this.props.meta.get('current_page')) - 1))}><button className="page-link">Previous</button></li>
          {this.buildPageButtons()}
          <li className="page-item" onClick={() => this.props.setPage((parseInt(this.props.meta.get('current_page')) + 1))}><button className="page-link">Next</button></li>
          <li className="page-item" onClick={() => this.props.setPage(this.props.meta.get('total_pages'))}><button className="page-link">Last</button></li>
        </ul>
      </nav>
    )
  }
}
