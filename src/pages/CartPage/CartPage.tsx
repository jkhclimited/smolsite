import './CartPage.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';


const CartPage: FC = () => {

    return <>
        <div className='cart-main-div'>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <table>
            <tr>
                <td>
                    Address
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" name="os0" />
                </td>
            </tr>
            </table>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHdwYJKoZIhvcNAQcEoIIHaDCCB2QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCQbp4sCHKC+sK82+vNEH78opggbeAvEdgsAbDQ3UCadDMUFn+LZpo6irdrRqV5xsZDhRP+oeFSFMFFilWgRx2Ewsa3EC58ReAbudGuVZyKDvmDgZhFvJqGUsip1SgEzKsMB7DnQaEURCnI3V7qzstBFHY0K5tZX0YKQcSkw/DL6jELMAkGBSsOAwIaBQAwgfQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQItHoWEwsoshqAgdANBhqfifp3APyJVPXpyQo487uAtmGVBRLCboI97TSbFR/w5FM2J1axHDzJlU6q7gBKIpjknM8uAogW7ziX9x2wpjp5tFWOPNSIOK6FOa7QMSczJC1o7IoKegUmhG1kk4Ww8JTcJlMx7Wd4xi+jjlDg7IwJL1kDgMOiMr7Va9lqY3GSQEUEi4PguClXWsiQtfM9MWMnF4DUMMmJEYhO6z/5xLFmHI2Qeo4fQfHRC6/8ODRiKAF2QdS4DyWhiQAcNA16wC5vYrdyODYdrI4PHbn+oIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjQwNDIyMTY0NjAwWjAjBgkqhkiG9w0BCQQxFgQUAosZjWBOSz9CILLtuebEbZ8F1GswDQYJKoZIhvcNAQEBBQAEgYBMSAeG9G6fAhsj5w9lWoeCrzWupK67pYZNZubZcV1Z+hiPGigxpcD68UkumI8uXHBSpOvo3pCXDUD5EdOJINEmbBDEy7kWk3QWwWUc63r+srIIiJmAoe2L71s1ckbXmTLALzXy95msTFr/LzFYO3HwllvxXbwURZc3OSDmMKqYew==-----END PKCS7-----" />
            <input type="hidden" name="cmd" value="_s-xclick" />
        </form>
        </div>
    </>
}

export default CartPage;