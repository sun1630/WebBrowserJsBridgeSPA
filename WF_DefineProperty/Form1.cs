using Microshaoft;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WF_DefineProperty
{
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
            //webBrowser1.Url = new Uri(s);
            this.wb1.Navigate(s);
            wb1.Navigated += new WebBrowserNavigatedEventHandler(wb1_Navigated);

            //this.wb2.ObjectForScripting = _dso;
            //this.wb2.Navigate(s);
            //wb2.Navigated += new WebBrowserNavigatedEventHandler(wb2_Navigated);
        }

        private void wb1_Navigated(object sender, WebBrowserNavigatedEventArgs e)
        {
            WebBrowser wb = sender as WebBrowser;
            mshtml.HTMLWindow2 win = (mshtml.HTMLWindow2)wb.Document.Window.DomWindow;
        }

        private void wb2_Navigated(object sender, WebBrowserNavigatedEventArgs e)
        {
            WebBrowser wb = sender as WebBrowser;
            mshtml.HTMLWindow2 win = (mshtml.HTMLWindow2)wb.Document.Window.DomWindow;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            object[] args = new object[1];
            args[0] = (object)"C#李四";
            var peripheringDevice = _dso.PeripheringDevice;
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

       
    }
}
