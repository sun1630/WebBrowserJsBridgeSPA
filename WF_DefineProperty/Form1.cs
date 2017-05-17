

namespace WF_DefineProperty
{
    using Microshaoft;
    using System;
    using System.Reflection;
    using System.Windows.Forms;
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private DocumentScriptingObject _dso;
        private void Form1_Load(object sender, EventArgs e)
        {
            this._dso = new DocumentScriptingObject();
            this.wb1.ObjectForScripting = _dso;
            string s = "http://localhost:18166/wb1.html";
            s = @"http://localhost:18166/index.html#debugInWebBrowser";
            //webBrowser1.Url = new Uri(s);
            this.wb1.Navigate(s);
            //wb1.Navigated += new WebBrowserNavigatedEventHandler(wb1_Navigated);
            //wb1.DocumentCompleted += Wb1_DocumentCompleted;
            //this.wb2.ObjectForScripting = _dso;
            //this.wb2.Navigate(s);
            //wb2.Navigated += new WebBrowserNavigatedEventHandler(wb2_Navigated);
        }

        //private void Wb1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        //{
        //    WebBrowser wb = sender as WebBrowser;
        //    mshtml.HTMLWindow2 win = (mshtml.HTMLWindow2)wb.Document.Window.DomWindow;
        //    win.execScript("debugInWebBrowser = true;");
        //}

        //private void wb1_Navigated(object sender, WebBrowserNavigatedEventArgs e)
        //{
        //    WebBrowser wb = sender as WebBrowser;
        //    mshtml.HTMLWindow2 win = (mshtml.HTMLWindow2)wb.Document.Window.DomWindow;
        //    win.execScript("debugInWebBrowser = true;");
            
        //}

        //private void wb2_Navigated(object sender, WebBrowserNavigatedEventArgs e)
        //{
        //    WebBrowser wb = sender as WebBrowser;
        //    mshtml.HTMLWindow2 win = (mshtml.HTMLWindow2)wb.Document.Window.DomWindow;
        //}

        private void button1_Click(object sender, EventArgs e)
        {
            object[] args = new object[2];
            args[0] = (object)this.textBox1.Text;
            args[1] = (object)this.textBox2.Text;
            var peripheringDevice = _dso.DataSynchronizer;
            if (peripheringDevice.OnExternalEvent != null)
            { 
                var listener = peripheringDevice.OnExternalEvent;
                listener
                    .GetType()
                    .InvokeMember
                            (
                                ""
                                , BindingFlags.InvokeMethod
                                , null
                                , listener
                                , args
                            );
            }

            peripheringDevice.Listeners.ForEach(

                (x)=>
                {

                    x
                    .GetType()
                    .InvokeMember
                            (
                                ""
                                , BindingFlags.InvokeMethod
                                , null
                                , x
                                , args
                            );
                }


                );

        }

       
    }
}
