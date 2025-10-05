from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from .models import Project

def index(request):
    projects = Project.objects.all()
    return render(request, 'index.html', {'projects': projects})

def resume(request):
    return render(request, 'resume.html')

def profile(request):
    return render(request, 'profile.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Here you would typically send an email or save to database
        # For now, we'll just add a success message
        messages.success(request, f"Thanks {name}! Your message has been received. I'll get back to you soon.")
        return redirect('contact')
        
    context = {
        'current_year': timezone.now().year
    }
    return render(request, 'contact.html', context)