import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as d3 from 'd3';
import { withContentRect } from 'react-measure';

const styles = theme => ({
  splash: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      theme.palette.primary.light
    } 90%)`,
    width: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

const DATA = [];
const uniformGenerator = d3.randomUniform();
for (let i = 0; i < 500; i++) {
  DATA.push([uniformGenerator(), uniformGenerator()]);
}

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }
  componentDidMount() {
    this._renderVoronoi();
  }
  componentDidUpdate() {
    this._renderVoronoi();
  }
  render() {
    const { classes, children, measureRef } = this.props;
    return (
      <div className={classes.splash} ref={measureRef}>
        <svg ref={node => (this.svgRef = node)} />
        {children}
      </div>
    );
  }
  _dimensions() {
    const { contentRect } = this.props;
    const { width, height } = contentRect.bounds;
    return { width, height };
  }
  _renderVoronoi() {
    const svg = d3.select(this.svgRef);
    const { width, height } = this._dimensions();

    // scale data and svg to parent dims
    const data = DATA.map(d => [d[0] * width, d[1] * height]);
    svg.attr('width', width).attr('height', height);

    // create voronoi generator
    const voronoi = d3.voronoi().extent([[-1, -1], [width, height]]);

    // join
    const pointsVoronoi = svg.selectAll('path').data(voronoi.polygons(data));

    pointsVoronoi
      .enter()
      .append('path')
      .attr('stroke', 'white')
      .attr('fill', 'none')
      .merge(pointsVoronoi)
      .attr('d', function(d) {
        return d ? 'M' + d.join('L') + 'Z' : null;
      });

    pointsVoronoi.exit().remove();
  }
}

Splash = withContentRect('bounds')(Splash);

export default withStyles(styles)(Splash);