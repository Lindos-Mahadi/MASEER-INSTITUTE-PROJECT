import React from 'react'

const Notice=()=> {
    return (
        <React.Fragment>
            <section className="py-5 my-5"></section>
            <h1 className="text-center">I am Notce Board Look at me carefully ???</h1>
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <table class="table table-striped table-hover table-bordered table-bordered-right">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Re. No.</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Class Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                                    img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                                    img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
                                    </td>
                                    <td>
                                        <a href="https://facebook.com" target="_blank">Friday</a> 
                                    </td>
                                    <td>
                                        5pm - 8:50 pm
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>
                                    <a href="https://facebook.com" target="Sunday">Friday</a> 
                                    </td>
                                    <td>
                                        5pm - 8:50 pm
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Notice;