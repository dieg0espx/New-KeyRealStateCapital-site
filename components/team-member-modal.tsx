import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, Mail, Smartphone } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  bio: string
  phone?: string
  officePhone?: string
  cellPhone?: string
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
              className={`w-full h-full object-cover ${
                member.name === "Tommy Loutzenheiser" 
                  ? "object-center scale-150" 
                  : "object-top"
              }`}
            />
          </div>
          
          {/* Title */}
          <div className="text-center">
            <p className="text-light-green font-medium text-lg">{member.title}</p>
          </div>
          
          {/* Bio */}
          <div className="text-gray-600 font-light leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: member.bio }}>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center text-gray-600 text-base">
              <Phone className="h-5 w-5 mr-3 text-light-green" />
              <a href={`tel:${member.officePhone || member.phone}`} className="hover:text-light-green transition-colors">
                {member.officePhone || member.phone}
              </a>
            </div>
            {member.cellPhone && (
              <div className="flex items-center text-gray-600 text-base">
                <Smartphone className="h-5 w-5 mr-3 text-light-green" />
                <a href={`tel:${member.cellPhone}`} className="hover:text-light-green transition-colors">
                  {member.cellPhone}
                </a>
              </div>
            )}
            <div className="flex items-center text-gray-600 text-base">
              <Mail className="h-5 w-5 mr-3 text-light-green" />
              <a href={`mailto:${member.email}`} className="hover:text-light-green transition-colors">
                {member.email}
              </a>
            </div>
          </div>
          
        </div>
      </DialogContent>
    </Dialog>
  )
}

