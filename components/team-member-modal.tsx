import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, Calendar, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMember {
  name: string
  title: string
  bio: string
  phone: string
  email: string
  image: string
}

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!member) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-gray-900">
            {member.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-square w-48 mx-auto overflow-hidden rounded-lg">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Title */}
          <div className="text-center">
            <p className="text-light-green font-medium text-lg">{member.title}</p>
          </div>
          
          {/* Bio */}
          <div className="text-gray-600 font-light leading-relaxed text-base">
            {member.bio}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center text-gray-600 text-base">
              <Phone className="h-5 w-5 mr-3 text-light-green" />
              {member.phone}
            </div>
            <div className="flex items-center text-gray-600 text-base">
              <Mail className="h-5 w-5 mr-3 text-light-green" />
              {member.email}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <div className="flex-1">
              <Link href="/contact">
                <Button className="bg-light-green hover:bg-perry text-white font-light w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Call
                </Button>
              </Link>
            </div>
            <Button
              variant="outline"
              className="border-light-green text-light-green hover:bg-perry/50 bg-transparent"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
