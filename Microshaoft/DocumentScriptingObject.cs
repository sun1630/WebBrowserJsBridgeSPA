namespace Microshaoft
{
    using System.Runtime.InteropServices;
    using System.Security.Permissions;
    [PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
    [ComVisible(true)]
    public class DocumentScriptingObject
    {
        public WebBrowserJsDataSyncBridge DataSynchronizer = new WebBrowserJsDataSyncBridge();
    }
}
