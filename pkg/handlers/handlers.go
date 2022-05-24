package handlers

import (
	"github.com/GoloisaNinja/go-bookings/pkg/config"
	"github.com/GoloisaNinja/go-bookings/pkg/models"
	"github.com/GoloisaNinja/go-bookings/pkg/render"
	"net/http"
)

var Repo *Repository

type Repository struct {
	App *config.AppConfig
}

func NewRepository(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

func NewHandlers(r *Repository) {
	Repo = r
}

func (e *Repository) Home(w http.ResponseWriter, r *http.Request) {
	remoteIP := r.RemoteAddr
	e.App.Session.Put(r.Context(), "remote_ip", remoteIP)
	render.RenderTemplate(w, "home.page.tmpl", &models.TemplateData{})
}
func (e *Repository) About(w http.ResponseWriter, r *http.Request) {
	stringMap := make(map[string]string)
	stringMap["test"] = "Hello Again User!"

	remoteIP := e.App.Session.GetString(r.Context(), "remote_ip")
	stringMap["remote_ip"] = remoteIP

	render.RenderTemplate(
		w, "about.page.tmpl", &models.TemplateData{
			StringMap: stringMap,
		},
	)
}
func (e *Repository) Millies(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "millies-quarters.page.tmpl", &models.TemplateData{})
}
func (e *Repository) Blueberrys(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "blueberrys-suite.page.tmpl", &models.TemplateData{})
}
func (e *Repository) Muffins(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "muffins-retreat.page.tmpl", &models.TemplateData{})
}
func (e *Repository) Availability(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "search-availability.page.tmpl", &models.TemplateData{})
}
