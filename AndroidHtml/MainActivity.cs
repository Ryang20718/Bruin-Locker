using Android.App;
using Android.Widget;
using Android.OS;
using Android.Webkit;

namespace AndroidHtml
{
    [Activity(Label = "Bruin-Locker", MainLauncher = true)]
    public class MainActivity : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);



            SetContentView(Resource.Layout.Main);

            WebView webView = FindViewById<WebView>(Resource.Id.LocalWebView);
            webView.SetWebViewClient(new WebViewClient()); // stops request going to Web Browser
            webView.Settings.JavaScriptEnabled = true;
            webView.LoadUrl("https://script.google.com/macros/s/AKfycbzyTsXqaxirlzt_kznDKkU7kc6rObKLbYY4d1ZldvKYUhdjWfDb/exec");

		}
    }
}

