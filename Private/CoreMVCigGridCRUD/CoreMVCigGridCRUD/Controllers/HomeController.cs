using CoreMVCigGridCRUD.Models;
using Infragistics.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using Infragistics.Documents.Reports.Graphics;
using Infragistics.Documents.Reports.Report;
using Infragistics.Documents.Reports.Report.Band;
using Infragistics.Documents.Reports.Report.Preferences.Printing;
using Infragistics.Documents.Reports.Report.Section;
using Infragistics.Documents.Reports.Report.Table;
using Infragistics.Documents.Reports.Report.Text;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace CoreMVCigGridCRUD.Controllers
{
    public class HomeController : Controller
    {
        private readonly DBforSampleContext _context;

        public HomeController(DBforSampleContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Dummy.ToListAsync());
        }

        public async Task<IActionResult> SaveData()
        {
            GridModel gridModel = new GridModel();
            List<Transaction<Dummy>> transactions = gridModel.LoadTransactions<Dummy>(HttpContext.Request.Form["ig_transactions"]);

            Boolean success = true;

            foreach (Transaction<Dummy> t in transactions)
            {
                // 行の新規追加
                if (t.type == "newrow")
                {
                    var row = await _context.Dummy.FindAsync(Int32.Parse(t.rowId));
                    if (row == null)
                    {
                        _context.Add(t.row);
                    } else
                    {
                        success = false;
                    }
                }
                // 行の削除
                else if (t.type == "deleterow")
                {
                    var row = await _context.Dummy.FindAsync(Int32.Parse(t.rowId));
                    if (row == null)
                    {
                        success = false;
                    } else
                    {
                        _context.Dummy.Remove(row);
                    }
                }
                // セルの更新
                else if (t.type == "cell")
                {
                    
                    var row = await _context.Dummy.FindAsync(Int32.Parse(t.rowId));
                    _context.Dummy.Attach(row);

                    if (t.col == "Col1")
                    {
                        row.Col1 = t.value;
                        _context.Entry(row).Property(x => x.Col1).IsModified = true;
                    }
                    if (t.col == "Col2")
                    {
                        row.Col2 = t.value;
                        _context.Entry(row).Property(x => x.Col2).IsModified = true;
                    }
                    if (t.col == "Col3")
                    {
                        row.Col3 = t.value;
                        _context.Entry(row).Property(x => x.Col3).IsModified = true;
                    }
                    if (t.col == "Col4")
                    {
                        row.Col4 = t.value;
                        _context.Entry(row).Property(x => x.Col4).IsModified = true;
                    }
                    if (t.col == "Col5")
                    {
                        row.Col5 = t.value;
                        _context.Entry(row).Property(x => x.Col5).IsModified = true;
                    }

                }
            }
            // データソースの更新
            if (success)
            {
                _context.SaveChanges();
                Dictionary<string, bool> response = new Dictionary<string, bool>();
                response.Add("Success", true);
                return Ok(response);
            } else
            {
                return BadRequest();
            }
            
        }

        [HttpPost]
        public void CreatePDF(string method)
        {
            List<Dummy> newDummy = _context.Dummy.ToList();
            bool exportAllPages = true;

            newDummy = newDummy
                .Select(c => new Dummy
                {
                    Id = c.Id,
                    Col1 = c.Col1,
                    Col2 = c.Col2,
                    Col3 = c.Col3
                })
                .ToList();
            exportAllPages = true;
            

            ExportHelper exporter = new ExportHelper(newDummy, "Porttait", 1, exportAllPages);
            Report igReport = exporter.Report();

            SendForDownload(igReport,method);
        }

        private void SendForDownload(Report report, string method)
        {   

            if(method == "print")
            {
                report.Print("Adobe PDF"); //プリンタを指定
            } else if (method == "pdf")
            {
                string theFile = @"C:\Users\MNakae\Desktop\document.pdf"; //ファイルを指定
                report.Publish(theFile, FileFormat.PDF);
            }

        }

        #region Report
        private class ExportHelper
        {
            #region Private
            private string Author = "Infragistics, Inc.";
            private string Creator = "Infragistics Report Writer";
            private string Copyright = string.Format("Copyright © 2003-{0} by Infragistics, Inc.", DateTime.Now.Year.ToString());

            private Report report;

            // Report Section
            private static ISection section;

            // Styles
            private static Borders bordersStyle;
            private static Font fontStyle;
            private static Font headerFont;

            //Report options
            private List<Dummy> dummyData;
            private string pageOrientation;
            private int currentPageNumber;
            private bool exportAllPages;
            #endregion

            /// <summary>
            /// The ReportExporter creates an sample report based igGrid and the data source attached to it.
            /// </summary>
            /// <param name="data">A sample data.</param>
            /// <param name="pageOrientation">Landscape or Portrait.</param>
            /// <param name="currentPageNumber">The selected page in the grid. </param>
            public ExportHelper(List<Dummy> data, string pageOrientation,
                                    int currentPageNumber, bool exportAllPages)
            {
                this.dummyData = data;
                this.pageOrientation = pageOrientation;
                this.currentPageNumber = currentPageNumber;
                this.exportAllPages = exportAllPages;
            }

            /// <summary>
            /// Creates an report object with the passed data.
            /// </summary>
            /// <returns>Returns a Report object.</returns>
            public Report Report()
            {
                SetupStyles();
                SetupReportInfo("Document Exporter");

                IBand reportHeader = section.AddBand();
                IText reportHeaderText = reportHeader.AddText();
                reportHeaderText.Height = new FixedHeight(30);
                reportHeaderText.Style.Font = headerFont;

                if (this.exportAllPages)
                {
                    reportHeaderText.AddContent("Congratulations! You have exported all pages from the report successfully!");
                }
                else
                {
                    reportHeaderText.AddContent(string.Format("Congratulations! You have exported page {0} successfully!", this.currentPageNumber));
                }

                ITable table = section.AddTable();

                table.Borders = bordersStyle;
                table.Margins.Top = 5;
                table.Margins.Bottom = 5;
                table.Width = new RelativeWidth(100);
                table.Margins.Left = 30;

                // Header
                ITableHeader header = table.Header;
                header.Height = new FixedHeight(24);
                header.Repeat = true;

                this.AddHeaderCell(header, "ID");
                this.AddHeaderCell(header, "カラム１");
                this.AddHeaderCell(header, "カラム２");
                this.AddHeaderCell(header, "カラム３");

                //Here we add all the rows of the table
                this.AddTableRows(table);

                return report;
            }

            private void AddHeaderCell(ITableHeader header, string text, Width width = null)
            {
                IText headerText;
                ITableCell cell = header.AddCell();

                Color startColor = new Color(117, 117, 117);
                Color endColor = new Color(84, 84, 84);
                cell.Borders = bordersStyle;
                cell.Background = new Background(new LinearGradientBrush(startColor, endColor, 90));
                cell.Alignment.Vertical = Alignment.Middle;

                if (width != null)
                {
                    cell.Width = width;
                }

                headerText = cell.AddText();

                headerText.Style.Font = headerFont;
                headerText.Style.Brush = Brushes.White;
                headerText.Alignment = TextAlignment.Center;
                headerText.AddContent(text);
            }

            private void AddTableRows(ITable table)
            {
                ITableRow tableRow;
                ITableCell tableCell;
                IText cellText;
                int i = 0;
                Paddings cellPaddings = new Paddings(3, 0, 5, 3);

                foreach (Dummy dummy in this.dummyData)
                {
                    tableRow = table.AddRow();
                    tableRow.Height = new FixedHeight(30);

                    Background cellBackgroundColor = (i % 2 == 0) ? new Background(Colors.White) : new Background(new Color(235, 235, 235));

                    tableCell = tableRow.AddCell();
                    tableCell.Paddings = cellPaddings;
                    tableCell.Background = cellBackgroundColor;
                    tableCell.Borders = bordersStyle;

                    cellText = tableCell.AddText();
                    cellText.Style.Font = fontStyle;
                    cellText.AddContent(dummy.Id.ToString());

                    tableCell = tableRow.AddCell();
                    tableCell.Paddings = cellPaddings;
                    tableCell.Background = cellBackgroundColor;
                    tableCell.Borders = bordersStyle;

                    cellText = tableCell.AddText();
                    cellText.Style.Font = fontStyle;
                    cellText.AddContent(dummy.Col1.ToString());

                    tableCell = tableRow.AddCell();
                    tableCell.Paddings = cellPaddings;
                    tableCell.Background = cellBackgroundColor;
                    tableCell.Borders = bordersStyle;

                    cellText = tableCell.AddText();
                    cellText.Style.Font = fontStyle;
                    cellText.AddContent(dummy.Col2.ToString());

                    tableCell = tableRow.AddCell();
                    tableCell.Paddings = cellPaddings;
                    tableCell.Background = cellBackgroundColor;
                    tableCell.Borders = bordersStyle;

                    cellText = tableCell.AddText();
                    cellText.Style.Font = fontStyle;
                    cellText.AddContent(dummy.Col3.ToString());

                    i++;
                }
            }

            private void SetupReportInfo(string title)
            {
                report = new Report();

                report.Info.Title = title;
                report.Info.Author = Author;
                report.Info.Creator = Creator;
                report.Info.Copyright = Copyright;

                report.Preferences.Printing.PaperSize = PaperSize.Auto;
                report.Preferences.Printing.PaperOrientation = PaperOrientation.Auto;
                report.Preferences.Printing.FitToMargins = true;

                SetupDefaultSection();
            }

            private void SetupDefaultSection()
            {
                section = report.AddSection();
                section.PageSize = PageSizes.Letter;
                section.PageMargins.All = 35;

                if (pageOrientation == "portrait")
                {
                    section.PageOrientation = PageOrientation.Portrait;
                }
                else
                {
                    section.PageOrientation = PageOrientation.Landscape;
                }
            }

            private void SetupStyles()
            {
                bordersStyle = new Borders(new Pen(new Color(117, 117, 117), (float)0.5, DashStyle.Solid));
                fontStyle = new Font("Meiryo", 9);
                headerFont = new Font("Meiryo", 11, 0);
            }
        }
        #endregion

    }
}
