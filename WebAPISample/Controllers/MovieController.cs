using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic

            return Ok(_context.Movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var movieInDB = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            // return Ok(movie);

            return Ok();
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic

            _context.Movies.Add(value);
            _context.SaveChanges();
            return Ok(value);
            
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic

            var updateMovie = _context.Movies.Find(movie);
            updateMovie.Director = movie.Director;
            updateMovie.Genre = movie.Genre;
            updateMovie.Title = movie.Title;
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic

            var deleteMovie = _context.Movies.Where(d => d.MovieId == id).FirstOrDefault();
            if (deleteMovie != null)
            {
                _context.Movies.Remove(deleteMovie);
                _context.SaveChanges();

            }
            return Ok();
        }
    }
}