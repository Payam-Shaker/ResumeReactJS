import logo from './logo.svg';
import Utbildning from './components/Utbildning'
import Arbetsliv from './components/Arbetserfarenhet'

import './App.css';

function App() {
  return (
    <div id="main-container" class="main-body">

      <div class="row">
        <div class="container">
        <img src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="img-fluid" alt="Responsive image"/>
        <h1>Payam Shaker Curriculum Vitae</h1>
        </div>
      </div>


        <div class="row">
          <div class="col col-lg-8 col-sm-4 col-xs-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus justo, ornare nec ornare ac, luctus vel leo. Praesent efficitur molestie neque, viverra iaculis magna placerat in. Nulla tempor turpis id nunc venenatis mollis. Fusce vitae diam diam. Quisque volutpat eleifend purus at feugiat. Maecenas rutrum volutpat justo non aliquet. Curabitur eget dictum est. Praesent maximus, turpis at gravida pharetra, lorem risus lobortis ex, bibendum tristique quam erat et ex. Duis ac magna ac nibh commodo posuere et sit amet ante. Sed fermentum pretium enim, id varius eros mollis id. Ut tortor leo, laoreet sit amet lacus eget, finibus aliquet leo. Vivamus maximus blandit gravida. Nulla dignissim orci eu nulla imperdiet, id bibendum mauris vehicula. Quisque eu porttitor leo.</p>
          </div>
          <div class="col">
          <p>PHOTO</p>
        </div>
        </div>
        <div class="row">
          <Utbildning />    
        </div>
        <div class="row">
        <Arbetsliv />  
        </div>
        <div class="row">
        Skills 
        </div>

          


        
    </div>
  );
}

export default App;
