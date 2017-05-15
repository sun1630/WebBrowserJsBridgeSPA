namespace WF_DefineProperty
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.wb1 = new System.Windows.Forms.WebBrowser();
            this.wb2 = new System.Windows.Forms.WebBrowser();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // wb1
            // 
            this.wb1.Location = new System.Drawing.Point(36, 85);
            this.wb1.MinimumSize = new System.Drawing.Size(20, 20);
            this.wb1.Name = "wb1";
            this.wb1.Size = new System.Drawing.Size(321, 377);
            this.wb1.TabIndex = 0;
            this.wb1.Navigated += new System.Windows.Forms.WebBrowserNavigatedEventHandler(this.wb1_Navigated);
            // 
            // wb2
            // 
            this.wb2.Location = new System.Drawing.Point(499, 85);
            this.wb2.MinimumSize = new System.Drawing.Size(20, 20);
            this.wb2.Name = "wb2";
            this.wb2.Size = new System.Drawing.Size(321, 377);
            this.wb2.TabIndex = 0;
            this.wb2.Navigated += new System.Windows.Forms.WebBrowserNavigatedEventHandler(this.wb2_Navigated);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(36, 13);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 1;
            this.button1.Text = "测试";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(905, 487);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.wb2);
            this.Controls.Add(this.wb1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.WebBrowser wb1;
        private System.Windows.Forms.WebBrowser wb2;
        private System.Windows.Forms.Button button1;
    }
}

