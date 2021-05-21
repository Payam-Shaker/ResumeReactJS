import React, { Component } from 'react'
export default class Utbildning extends Component {
    render() {
        return (
            <div>
                {/* <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                    <th scope="col">Handelsakademin, Göteborg</th>
                    <th scope="col">Objektorienterad Systemutveckling</th>
                    <th scope="col">aug 2020 - pågående</th>
                    </tr>
                </thead>
                <tbody>
                    <p>En yrkesorienterad utbildning som förbereder mig med färdigheter inom</p>
                    <ul>
                        <li>C#, .NE</li>
                        <li>Unit Testing</li>

                    </ul>
                </tbody>
                </table> */}

                <div class="card">
                    <div class="card-header">
                        <b>Handelsakademin, Göteborg   </b> <em>Objektorienterad Systemutveckling</em> <h6>aug 2020 - pågående</h6>
                    
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">En yrkesorienterad utbildning som förbereder mig med färdigheter inom</h5>
                        {/*<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                             <ul>
                        <li>C#, .NE</li>
                        <li>Unit Testing</li>

                    </ul>

                    </div>
                    </div>            
                </div>

        )
    }
}