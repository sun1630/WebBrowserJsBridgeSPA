namespace Microshaoft
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.InteropServices;
    using System.Security.Permissions;
    [PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
    [ComVisible(true)]
    public class WebBrowserJsDataSyncBridge
    {
        private List<object> _listeners = null;
        [ComVisible(false)]
        public List<object> Listeners
        {
            get
            {
                return _listeners;
            }
        }
        //[ComVisible(false)]
        public void AddJavaScriptListener(object listener)
        {
            if (_listeners == null)
            {
                _listeners = new List<object>();
            }
            _listeners.Add(listener);
        }
        private object _listener = null;
        public object OnExternalEvent
        {
            get
            {
                return _listener;
            }
            set
            {
                _listener = value;
            }
        }

        public Dictionary<string, object> listenerlist = null;
        public string AddJavaScriptListener_key(object listener)
        {
            Guid uid = Guid.NewGuid();
            string dkey = uid.ToString(); 
            if (listenerlist == null)
            {
                listenerlist = new Dictionary<string, object>();
            }
            listenerlist.Add(dkey, listener);
            return dkey;
        }
        
        public string  GetExternalName()
        {
            return "c# GetExternalName";
        }

    }
}
