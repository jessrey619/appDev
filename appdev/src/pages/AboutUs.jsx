import '../css/aboutus.css';
import { Grid } from '@mui/material';

export const PageAboutUs = () => {
  return (
    <div className="pageAboutUsBody">
      <h1 className="titleAboutus">ABOUT US</h1>
      <div className="outer">
        <Grid container>
          {/* Left side */}
          <Grid className="inner" item xs={12} md={6}>
            <Grid className="txtBox" item xs={11}>
              Nestled within the vibrant campus of CIT-U, our clinic stands as a beacon of health and vitality. As your
              friendly neighborhood healthcare providers, we are committed to fostering a culture of wellness, where every
              student, faculty, and staff member feels empowered to prioritize their health.
            </Grid>
            <Grid className="txtBox" item xs={11}>
            <br/>
              <h1 className="titleInner">Mission</h1>
              <span>
                Ipsum suspendisse ultrices gravida dictum fusce ut placerat.Purus gravida quis blandit turpis cursus in
                hac. <br />
                <br /> Feugiat in ante metus dictum. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Ac
                tortor dignissim convallis aenean et Diam donec adipiscing tristique risus nec feugiat in fermentum.
              </span>
            </Grid>
            <Grid className="txtBox" item xs={11}>
              <h1 className="titleInner" >Vision</h1>
              <span>
                Feugiat in ante metus dictum. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Ac tortor
                dignissim convallis aenean et Diam donec adipiscing tristique risus nec feugiat in fermentum.
              </span>
            </Grid>
          </Grid>

          {/* Right side */}
          <Grid className="rightspace" item xs={12} md={6}>
            <Grid item xs={12}>
              <img src="/aboutUspics.png" alt="AboutUsRightSide" className="pageImage" />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid className='bottomBox' item xs={20}>
        <h2 style={{transform: 'translateY(-80%)', textAlign:'center' }}>Meet the Team</h2>
        <Grid container spacing={2} style={{marginLeft:'104px'}}>
  <Grid className="person" item xs={3}>
  <br />
    <span className='teamName'>
      Name
      </span>
      <br />
      <span className='teamDesc'>
     centercentercenter
    </span>
  </Grid>
  <Grid className="person" item xs={3}>
  <br />
    <span className='teamName'>
      Name
      </span>
      <br />
      <span className='teamDesc'>
     centercentercenter
    </span>
  </Grid>
  <Grid className="person" item xs={3}>
    <br />
    <span className='teamName'>
      Name
      </span>
      <br />
      <span className='teamDesc'>
     centercentercenter
    </span>
  </Grid>
  <Grid className="person" item xs={3}>
    <br />
    <span className='teamName'>
      Name
      </span>
      <br />
      <span className='teamDesc'>
     centercentercenter
    </span>
  </Grid>
</Grid>

      </Grid>
    </div>
  );
};
