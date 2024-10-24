import React, { useEffect } from 'react';
import AngleDownIcon from "../assets/images/angle-down.svg";

function Installation() {

    return (
        <div class="components-info-content">
            <div className="info">
                <div className="title">
                    <h2>Intro - P&G React Component Library: MOPkit</h2>
                </div>
                <div className="content-block">
                    <p>This component library (MOPkit) is built using React (^18.3.1) and includes the new branding styles. The goal of MOPkit is to modernize and standardize our application experience and front end codebase. Currently, the new styling is not available outside of React.
                        Besides the styling changes and introduction of React, one of the main changes is we are now using <a target="_blank" href="https://fontawesome.com/icons">Font Awesome</a> for our icons. By default, the light icons are included in this library, but it is allowed to use the other weights if needed.
                    </p>
                </div>
                <div className="content-block">
                    <h5>Including MOPkit in your project</h5>
                    <p>To use this library, please run <span className="highlight">npm install @procter-gamble/sppo-ma-react-bonzai --save</span> from with in your application root directory. This will add the styling repository as a dependancy for your application in <span
                        className="highlight">package.json</span></p>
                    <p>If installation failed as a result of an authentication issue please follow the instructions in MOPkit Initial Setup</p>
                </div>
                <div className="content-block">
                    <h5>Project boilerplate</h5>
                    <p>While every project may have slight differences, it's advised to maintain a similar folder structure across our apps, at least for front end. For our react projects, we use webpack to compile and resolve URLs, which rely on a certain folder structure. Feel free to use this folder structure as a starting point and expand / change as needed. The boilerplate is available on Gitlab to be downloaded / cloned.</p>
                    <p><a target="_blank" href="https://github.com/procter-gamble/sppo-ma-app-react-boilerplate">Download boilerplate from Gitlab</a></p>
                </div>
                <div className="content-block">
                    <h5>First time set up with boilerplate</h5>
                    <p>If using the boilerplate, you will need to run the following commands.</p>
                    <div className="highlight lg">npm install && webpack</div>
                </div>
                <div className="content-block">
                    <h5>MOPkit Initial Setup</h5>
                    <p>Before we're able to install MOPkit we'll be need to request access to MOPkit and configure our environment so it has access to the private repository that hosts it.</p>
                    <ol>
                        <li><a target="_blank" href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens">Create a personal access token</a> (PAT) in github.</li>
                        <li>Make sure to grant the key "repo" and "read:packages" roles.</li>
                        <li>Save your token as you won't be able to retrieve it once its generated. if lost you'll need to regenerate it.</li>
                        <li>Run <span className="highlight">npm login --scope @procter-gamble --registry https://npm.pkg.github.com</span>
                            <ul>
                                <li>Username is your github username</li>
                                <li>Password is your newly generated personal access token</li>
                                <li>Email is the email associated with your github account</li>
                            </ul>
                        </li>
                        <li>On success you should be able to run the <span className="highlight">npm install</span>
                            <span className="highlight">@procter-gamble/sppo-ma-react-bonzai --save</span> with out issue
                        </li>
                    </ol>
                    <p class="featured">Add --watch to the webpack command (via command line) to automatically watch the files and compile.</p>
                </div>
            </div>
        </div>
    );

}

export default Installation;