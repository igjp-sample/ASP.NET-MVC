using CoreMVCigGridCRUD.Models;
using Infragistics.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

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
                // Add New Row
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
                // Delete Row
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
                // Update Cell
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
            // Commit to DataSource
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

    }
}
